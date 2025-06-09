const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  course: [
    {
      type: String,
      ref: 'subsection',
    },
  ],
});

module.exports = mongoose.model('tag', tagSchema);
