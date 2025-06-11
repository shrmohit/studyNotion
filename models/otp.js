const mongoose = require('mongoose');
const mailSender = require('../config/mailSender');

const otpSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

// function -> email send
async function sendVerificationCode(email, otp) {
  try {
    const mailRespose = await mailSender(email, 'verification otp', otp);
    console.log('otp send Successfully', mailRespose);
  } catch (error) {
    console.log('error in otp', error);
  }
}

otpSchema.pre('save', async function (next) {
  await sendVerificationCode(this.email, this.otp);
  next();
});

module.exports = mongoose.model('otp', otpSchema);