const mongoose = require('mongoose');

const coursesProgressSchema = mongoose.Schema({
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
  },

  completedVideo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subsection',
    },
  ],
});

module.exports = mongoose.model('courseprogress', coursesProgressSchema);
