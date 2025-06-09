const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: false,
  },
  dateOfBirth: {
    type: String,
    required: false,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('profile', profileSchema);
