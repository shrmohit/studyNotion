import { userModel } from '../../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { firstName, lastName, email, password, accountType } = req.body;
  if (!firstName || !lastName || !email || !password || !accountType) {
    return res.status(400).json({
      message: 'all fields required',
      success: false,
    });
  }
  console.log('1');
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: 'user already exist',
      success: false,
    });
  }
  console.log('2');
  // hash user password
  const hashPassword = await bcrypt.hash(password, 10);

  const userData = await userModel.create({
    firstName,
    lastName,
    email,
    accountType,
    password: hashPassword,
  });
  console.log('3');
  return res.status(201).json({
    message: 'user register successful',
    success: true,
    userData,
  });
};

// login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'email and password required',
      success: false,
    });
  }

  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: 'user not found',
      success: false,
    });
  }
  // match password
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    return res.status(400).json({
      message: 'Invalid Password',
      success: false,
    });
  }

  // generate token
  let tokenData = {
    userId: user._id,
    email: user.email,
  };
  const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
    expiresIn: '1d',
  });

  // send cookire
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // only send over HTTPS in production
    sameSite: 'strict',
    maxAge: 1 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: 'login Successfully',
    success: true,
    user,
  });
};

//logout
export const logout = (req, res) => {
  try {
    res.status(200).cookie('token', '', { maxAge: 0 }).json({
      message: 'logout Successfully',
      success: true,
    });
  } catch (error) {
    console.log('logout', error);
  }
};
