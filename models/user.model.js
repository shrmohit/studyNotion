const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ['student', 'instractor', 'admin'],
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'course',
    },
  ],
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'profile',
  },
  coursesProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'courseprogress',
    },
  ],
});

module.exports = mongoose.model('user', userSchema);
