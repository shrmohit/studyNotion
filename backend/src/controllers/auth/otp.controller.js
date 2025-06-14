import OTP from '../../models/otp.model.js';
import bcrypt from 'bcrypt';
import mailSender from '../../config/mailSender.js';
import { OTP_VALIDITY_MIN } from '../../constants/constant.js';

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

export const sendOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).message({
      message: 'Email not found',
      success: false,
    });
  }

  // find email from db
  const existingOtp = await OTP.findOne({ email });
  if (existingOtp) {
    OTP.deleteOne({ email: existingOtp.email });
  }

  let otp = generateOtp();
  const hashOtp = await bcrypt.hash(otp, 10);

  try {
    await mailSender(email, otp);
    await OTP.create({
      email,
      otp: hashOtp,
    });

    return res.status(200).json({
      message: 'OTP send Successfully',
      success: true,
    });
  } catch (error) {
    console.log('sendOtp mail', error);
  }
};

// verify otp
export const verify = async (req, res) => {
  // access from body
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({
      message: 'email and otp not found',
      success: false,
    });
  }

  // email and otp exist in db
  const otpExists = await OTP.findOne({ email });
  if (!otpExists) {
    return res.status(400).json({
      message: 'OTP not exist in email. Please first send otp',
      success: false,
    });
  }

  // verify email and db otp
  const verifyOtp = await bcrypt.compare(otp, otpExists.otp);
  if (!verifyOtp) {
    return res.status(404).json({
      message: 'Enter valid OTP',
      success: false,
    });
  }

  // check validation of otp
  const currentTime = new Date();
  const otpGenerateTime = otpExists.createdAt;
  const otpExpiryTime = new Date(
    otpGenerateTime.getTime() + OTP_VALIDITY_MIN * 60 * 1000
  );

  if (currentTime > otpExpiryTime) {
    return res.status(400).json({
      message: 'otp expiry,please send otp again',
      success: false,
    });
  }

  await OTP.deleteOne({ email });

  return res.status(200).json({
    message: 'OTP verified Successfully',
    success: true,
  });
};
