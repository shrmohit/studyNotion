import mongoose from 'mongoose';

const coursesProgressSchema = mongoose.Schema({
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },

  completedVideo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubSection',
    },
  ],
});

export const CourseProgress = mongoose.model(
  'CourseProgress',
  coursesProgressSchema
);
