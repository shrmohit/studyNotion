import { userModel } from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { mailSendWithResetPasswordLink } from '../../config/mailSendWithResetPasswordLink.js';

export const changePassword = async (req, res) => {
  try {
    const { userId } = req.user;

    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        message: 'all field required',
        success: false,
      });
    }

    const existingUser = await userModel.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(401).json({
        Message: 'user not found',
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'old password incorrect',
        success: false,
      });
    }

    const hashNewPassword = await bcrypt.hash(newPassword, 10);
    const userNewPassword = await userModel.findOneAndUpdate(
      { _id: userId },
      { password: hashNewPassword }
    );

    return res.status(200).json({
      message: 'Password update successfully',
      success: true,
      userNewPassword,
    });
  } catch (error) {
    console.log('reset password', error);
  }
};

// forget user password
export const forgetPassword = async (req, res) => {
  console.log("dnfjds");
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: 'Email required for forget password',
      success: false,
    });
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: 'User not found',
      success: false,
    });
  }

  const token = await jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: '10m',
  });

  try {
    console.log("mail")
    await mailSendWithResetPasswordLink(email, `http://localhost:5173/resetPassword/${token}`);
    console.log("mail success")
    return res.status(200).json({
      message: 'Password reset link has been sent to your email',
      success: true
    })
  } catch (error) {
    console.log("mail errorr")
    return res.status(500).json({
      message: 'Internal server error, please try again later',
      success: false
    })
  }
};

// reset password
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { resetpassword } = req.body;

  let decode;
  try {
    decode = await jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: 'Token Invalid ',
      success: false,
    });
  }

  const email = decode.email;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: 'user not found',
      success: false,
    });
  }

  const hashResetPassword = await bcrypt.hash(resetpassword, 10);

  user.password = hashResetPassword;
  await user.save();

  res.status(201).json({
    message: 'reset password succcessfully',
    success: true,
  });
};
