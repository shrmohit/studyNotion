import mongoose from 'mongoose';

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
  accountType: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Course',
    },
  ],
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'Profile',
  },
  coursesProgress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Courseprogress',
    },
  ],
});

export const userModel = mongoose.model('User', userSchema);
