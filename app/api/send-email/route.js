import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `Contact Form Submission: ${firstname} ${lastname}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              📬 New Contact Form Submission
            </h1>
            <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">
              Someone wants to get in touch with you
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 20px;">
            
            <!-- Contact Info Card -->
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #667eea;">
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                👤 Contact Information
              </h2>
              
              <div style="display: grid; gap: 16px;">
                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <div style="background-color: #667eea; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-size: 14px; font-weight: bold;">
                    👤
                  </div>
                  <div>
                    <div style="font-weight: 600; color: #374151; font-size: 16px;">${firstname} ${lastname}</div>
                    <div style="color: #6b7280; font-size: 14px;">Full Name</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <div style="background-color: #10b981; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-size: 12px;">
                    ✉️
                  </div>
                  <div>
                    <div style="font-weight: 600; color: #374151; font-size: 16px;">
                      <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                    </div>
                    <div style="color: #6b7280; font-size: 14px;">Email Address</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <div style="background-color: #f59e0b; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-size: 12px;">
                    📞
                  </div>
                  <div>
                    <div style="font-weight: 600; color: #374151; font-size: 16px;">
                      <a href="tel:${phone}" style="color: #f59e0b; text-decoration: none;">${phone}</a>
                    </div>
                    <div style="color: #6b7280; font-size: 14px;">Phone Number</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; padding: 12px 0;">
                  <div style="background-color: #8b5cf6; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-size: 12px;">
                    🔧
                  </div>
                  <div>
                    <div style="font-weight: 600; color: #374151; font-size: 16px;">${service}</div>
                    <div style="color: #6b7280; font-size: 14px;">Service Requested</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Message Card -->
            <div style="background-color: #fefefe; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
              <h3 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                💬 Message
              </h3>
              <div style="background-color: #f9fafb; border-radius: 6px; padding: 20px; border-left: 3px solid #667eea;">
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="text-align: center; margin: 32px 0;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin-right: 12px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.25); transition: all 0.3s ease; margin-bottom: 12px;">
                📧 Reply via Email
              </a>
              <a href="tel:${phone}" style="display: inline-block; background-color: #10b981; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.25); transition: all 0.3s ease;">
                📞 Call Now
              </a>
            </div>

          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 20px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              📅 Received on ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 12px;">
              This email was automatically generated from your contact form
            </p>
          </div>

        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err });
  }
}
