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
    } = body;

    // Basic server-side validation
    if (
      !fullName ||
      !phone ||
      !email ||
      !requirement ||
      !budget ||
      !location
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

    const { data, error } = await resend.emails.send({
      from: "KAIROS HOME REALTY <enquiries@kairoshomerealty.com>",

      to: [process.env.CONTACT_EMAIL!],

      replyTo: email,

      subject: `New Enquiry from ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; color: #071b3b;">
          <h2>New Website Enquiry</h2>

          <p>You have received a new enquiry from your website.</p>

          <hr />

          <p>
            <strong>Full Name:</strong><br />
            ${fullName}
          </p>

          <p>
            <strong>Email Address:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Phone Number:</strong><br />
            ${phone}
          </p>

          <p>
            <strong>Requirement:</strong><br />
            ${requirement}
          </p>

          <p>
            <strong>Budget Range:</strong><br />
            ${budget}
          </p>

          <p>
            <strong>Preferred Location:</strong><br />
            ${location}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message || "No additional message provided."}
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