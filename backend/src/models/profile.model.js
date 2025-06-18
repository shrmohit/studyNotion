import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  about: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
});

export const Profile = mongoose.model('Profile', profileSchema);
