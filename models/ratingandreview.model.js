const mongoose = require('mongoose');

const ratingsAndReviewsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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

module.exports = mongoose.model('ratingsAndReview', ratingsAndReviewsSchema);
