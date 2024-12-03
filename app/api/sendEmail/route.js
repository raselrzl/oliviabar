import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { recipientEmail, subject, messageBody } = await request.json();

    if (!recipientEmail || !subject || !messageBody) {
      return NextResponse.json(
        { message: 'Recipient email, subject, and message body are required.' },
        { status: 400 }
      );
    }

    // Configure the NodeMailer transport for Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger's SMTP server
      port: 465, // Use 465 for secure connections (SSL)
      secure: true, // SSL connection
      auth: {
        user: 'info@oliviasbar.se', // Your Hostinger email
        pass: '100%Info.', // Replace with your email's password
      },
    });

    // Set up email options
    const mailOptions = {
      from: 'info@oliviasbar.se', // Sender's email
      to: recipientEmail, // Recipient's email
      subject, // Subject of the email
      text: messageBody, // Plain text message
      html: `<p>${messageBody.replace(/\n/g, '<br>')}</p>`, // HTML message (optional)
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please check server logs for more details.' },
      { status: 500 }
    );
  }
}
