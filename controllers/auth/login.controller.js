const userModel = require('../../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: 'all fields required',
      success: false,
    });
  }

  // hash user password
  const hashPassword = await bcrypt.hash(password, 10);
  await userModel.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  return res.status(201).json({
    message: 'user register successful',
    success: true,
  });
};

// login
