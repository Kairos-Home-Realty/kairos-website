import { NextResponse } from "next/server";
import { Resend } from "resend";
import { FEATURED_PROJECTS } from "@/constants/site";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
    }
    const values = body as Record<string, unknown>;
    const getValue = (key: string) => typeof values[key] === "string" ? values[key].trim() : "";
    const fullName = getValue("fullName");
    const phone = getValue("phone");
    const email = getValue("email");
    const requirement = getValue("requirement");
    const budget = getValue("budget");
    const location = getValue("location");
    const message = getValue("message");
    const leadType = getValue("leadType");
    const sourcePage = getValue("sourcePage");
    const sourceCTA = getValue("sourceCTA");
    const utmSource = getValue("utmSource");
    const utmMedium = getValue("utmMedium");
    const utmCampaign = getValue("utmCampaign");
    const isQuickEnquiry = values.quick === true;

    if (
      fullName.length < 2 ||
      fullName.length > 120 ||
      !phone ||
      (!isQuickEnquiry && (!email || !requirement || !budget || !location))
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }
    if (
      sourcePage.length > 300 ||
      sourceCTA.length > 200 ||
      utmSource.length > 200 ||
      utmMedium.length > 200 ||
      utmCampaign.length > 200
    ) {
      return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
    }

    if (leadType) {
      const mobile = phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
      if (!/^[6-9]\d{9}$/.test(mobile)) {
        return NextResponse.json({ error: "Enter a valid Indian mobile number." }, { status: 400 });
      }
      const requiredByType: Record<string, string[]> = {
        property: ["propertyType", "location", "budget", "configuration", "homeLoanRequired"],
        "site-visit": ["projectName"],
        "home-loan": ["budget", "income"],
      };
      if (!requiredByType[leadType]) {
        return NextResponse.json({ error: "Invalid enquiry type." }, { status: 400 });
      }
      if (requiredByType[leadType].some((field) => !getValue(field))) {
        return NextResponse.json({ error: "Please complete all required enquiry fields." }, { status: 400 });
      }
      const project = FEATURED_PROJECTS.find((item) => item.name === getValue("projectName"));
      const validLocations = new Set(FEATURED_PROJECTS.map((item) => item.location));
      const validConfigurations = new Set(FEATURED_PROJECTS.map((item) => item.configurations));
      if (
        (leadType === "site-visit" && !project) ||
        (leadType === "property" && !["apartment", "villa", "plot", "investment"].includes(getValue("propertyType"))) ||
        (leadType === "property" && !validLocations.has(getValue("location"))) ||
        (leadType === "property" && !validConfigurations.has(getValue("configuration")) && getValue("configuration") !== "Not sure yet") ||
        (leadType === "property" && getValue("projectName") && !project) ||
        (leadType === "property" && !["Yes", "No", "Not sure yet"].includes(getValue("homeLoanRequired"))) ||
        (leadType === "home-loan" && (!/^\d+$/.test(getValue("income")) || Number(getValue("income")) < 1)) ||
        (leadType === "home-loan" && getValue("emi") && (!/^\d+$/.test(getValue("emi")) || Number(getValue("emi")) < 0))
      ) {
        return NextResponse.json({ error: "Please choose valid options for your enquiry." }, { status: 400 });
      }
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("Contact email is not configured. Set RESEND_API_KEY and CONTACT_EMAIL.");
      return NextResponse.json(
        { error: "Enquiry delivery is temporarily unavailable. Please call or WhatsApp Kairos." },
        { status: 503 }
      );
    }

    const escapeHtml = (value: unknown) =>
      String(value ?? "").replace(/[&<>\"']/g, (character) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
        return entities[character];
      });

    const safeName = escapeHtml(fullName);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeRequirement = escapeHtml(requirement || (leadType ? leadType.replace("-", " ") : "Callback request"));
    const safeBudget = escapeHtml(budget || "Not provided");
    const safeLocation = escapeHtml(location || "Not provided");
    const safeMessage = escapeHtml(message || "No additional message provided.");
    const details = [
      ["Project", "projectName"],
      ["Property type", "propertyType"],
      ["Configuration", "configuration"],
      ["Home-loan assistance", "homeLoanRequired"],
      ["Monthly household income (₹)", "income"],
      ["Approximate monthly EMI (₹)", "emi"],
      ["Preferred site visit date", "preferredDate"],
      ["Preferred site visit time", "preferredTime"],
      ["Page", "sourcePage"],
      ["CTA source", "sourceCTA"],
      ["UTM source", "utmSource"],
      ["UTM medium", "utmMedium"],
      ["UTM campaign", "utmCampaign"],
    ]
      .map(([label, key]) => {
        const value = getValue(key);
        return value ? `<p><strong>${label}:</strong><br />${escapeHtml(value)}</p>` : "";
      })
      .join("");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "KAIROS HOME REALTY <enquiries@kairoshomerealty.com>",

      to: [process.env.CONTACT_EMAIL],

      ...(email ? { replyTo: email } : {}),

      subject: `${leadType ? `${leadType.replace("-", " ")} enquiry` : isQuickEnquiry ? "Callback Request" : "New Enquiry"} from ${fullName.slice(0, 100)}`,

      html: `
        <div style="font-family: Arial, sans-serif; color: #071b3b;">
          <h2>New Website Enquiry</h2>

          <p>You have received a new enquiry from your website.</p>

          <hr />

          <p>
            <strong>Full Name:</strong><br />
            ${safeName}
          </p>

          <p>
            <strong>Email Address:</strong><br />
            ${safeEmail || "Not provided"}
          </p>

          <p>
            <strong>Phone Number:</strong><br />
            ${safePhone}
          </p>

          <p>
            <strong>Requirement:</strong><br />
            ${safeRequirement}
          </p>

          <p>
            <strong>Budget Range:</strong><br />
            ${safeBudget}
          </p>

          <p>
            <strong>Preferred Location:</strong><br />
            ${safeLocation}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${safeMessage}
          </p>

          ${details}

          <hr />

          <p style="color: #777; font-size: 12px;">
            This enquiry was submitted through kairoshomerealty.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Failed to send your enquiry. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}
