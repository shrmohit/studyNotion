const userModel = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  console.log(req.body.accountType);
  const { firstName, lastName, email, password, accountType } = req.body;
  if (!firstName || !lastName || !email || !password || !accountType) {
    return res.status(400).json({
      message: 'all fields required',
      success: false,
    });
  }

  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: 'user already exist',
      success: false,
    });
  }

  // hash user password
  const hashPassword = await bcrypt.hash(password, 10);

  const userData = await userModel.create({
    firstName,
    lastName,
    email,
    accountType,
    password: hashPassword,
  });

  return res.status(201).json({
    message: 'user register successful',
    success: true,
    userData,
  });
};

// login
exports.login = async (req, res) => {
  const { email, password, accountType } = req.body;
  console.log(password);

  if (!email || !password || !accountType) {
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

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    return res.status(400).json({
      message: 'Invalid Password',
      success: false,
    });
  }
  // account type
  console.log(accountType, user);

  if (accountType != user.accountType) {
    return res.status(400).json({
      message: 'Invalid accountType',
      success: false,
    });
  }

  // generate token
  let tokenData = {
    userId: user._id,
  };
  const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
    expiresIn: '1d',
  });

  // send cookire
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // only send over HTTPS in production
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: 'login Successfully',
    success: true,
    user,
  });
};
