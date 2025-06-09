const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
  },
  subSection: [
    {
      type: String,
      ref: 'subsection',
    },
  ],
});

module.exports = mongoose.model('section', sectionSchema);
