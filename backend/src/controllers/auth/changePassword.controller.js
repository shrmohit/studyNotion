import { userModel } from '../../models/user.model.js';
import bcrypt from 'bcrypt';

export const resetPassword = async (req, res) => {
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
