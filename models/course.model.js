const mongoose = require('mongoose');

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
    ref: 'user',
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
      ref: 'ratingsAndReview',
    },
  ],
  tag: {
    type: String,
    required: true,
    ref: 'tag',
  },
  sudentsEnrollment: [
    {
      type: String,
      required: true,
      ref: 'user',
    },
  ],
  courseContents: [
    {
      type: String,

      ref: 'section',
    },
  ],
});

module.exports = mongoose.model('course', courseSchema);
