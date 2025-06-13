import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
    ref: 'User',
  },
  whatYouLearn: {
    type: String,
  },
  price: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  atingsAndReviews: [
    {
      type: String,
      required: false,
      ref: 'RatingsAndReview',
    },
  ],
  tag: {
    type: String,
    required: true,
    ref: 'Tag',
  },
  sudentsEnrollment: [
    {
      type: String,
      required: true,
      ref: 'User',
    },
  ],
  courseContents: [
    {
      type: String,

      ref: 'Section',
    },
  ],
});

export const Course = mongoose.model('Course', courseSchema);
