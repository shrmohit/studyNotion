import nodemailer from 'nodemailer';
import { OTP_VALIDITY_MIN } from '../constants/constant.js';

const mailSentWithOtp = async (email, otp) => {
  try {
    //create transporter
    const transporter = await nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    // info
    let info = await transporter.sendMail({
      from: `"StudyNotion Support" <no-reply@studynotion.com>`,
      to: email,
      subject: 'Your One-Time Password (OTP) for Email Verification',
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p>Dear User,</p>

      <p>Thank you for choosing StudyNotion.</p>

      <p>
        To verify your email address, please use the One-Time Password (OTP) provided below:
      </p>

      <p style="font-size: 1.4em; font-weight: bold; color: #2e86de;">
        🔐 OTP Code: <span style="letter-spacing: 2px;">${otp}</span>
      </p>

      <p>This code is valid for the next <strong>${OTP_VALIDITY_MIN} minutes</strong>.</p>

      <p style="color: #e74c3c;"><em>⚠️ Please do not share this code with anyone.</em></p>

      <p>If you did not request this, please ignore this email or contact our support team.</p>

      <p>Best regards,<br>
      <strong>StudyNotion Team</strong><br>
      <a href="mailto:support@studynotion.com">support@studynotion.com</a> | <a href="https://studynotion.com">studynotion.com</a>
      </p>
    </div>
  `,
    });

    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
  }
};

export default mailSentWithOtp;
