import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      requirement,
      budget,
      location,
      message,
      quick,
    } = body;
    const isQuickEnquiry = quick === true;

    // Basic server-side validation
    if (
      !fullName ||
      !phone ||
      (!isQuickEnquiry && (!email || !requirement || !budget || !location))
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
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
    const safeRequirement = escapeHtml(requirement || "Callback request");
    const safeBudget = escapeHtml(budget || "Not provided");
    const safeLocation = escapeHtml(location || "Not provided");
    const safeMessage = escapeHtml(message || "No additional message provided.");

    const { data, error } = await resend.emails.send({
      from: "KAIROS HOME REALTY <enquiries@kairoshomerealty.com>",

      to: [process.env.CONTACT_EMAIL!],

      ...(email ? { replyTo: email } : {}),

      subject: `${isQuickEnquiry ? "Callback Request" : "New Enquiry"} from ${String(fullName).slice(0, 100)}`,

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
