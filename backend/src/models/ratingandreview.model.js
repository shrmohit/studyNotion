const mongoose = require('mongoose');

const ratingsAndReviewsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export const RatingsAndReview = mongoose.model(
  'RatingsAndReview',
  ratingsAndReviewsSchema
);
