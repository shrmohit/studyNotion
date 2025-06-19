import nodemailer from 'nodemailer';
import { OTP_VALIDITY_MIN } from '../constants/constant.js';

export const mailSendWithResetPasswordLink = async (email, resetLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      }
    });

    let info = await transporter.sendMail({
      from: '"StudyNotion" <shaurya9635@gmail.com>',
      to: `${email}`,
      subject: 'StudyNotion Password Reset',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
      <h2 style="color: #4A90E2;">Reset Your Password</h2>
      <p>Hello,</p>
      <p>We received a request to reset your password. Click the link below to reset it:</p>
      <a href="${resetLink}" style="display: inline-block; background-color: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
      <br />
      <p>Thanks,<br /><strong>StudyNotion Team</strong></p>
    </div>
  `
    });

    return info;
  } catch (error) {
    console.log("error", error);
  }
};