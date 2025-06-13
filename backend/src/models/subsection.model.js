import mongoose from 'mongoose';

const subsectionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  timeDuration: {
    type: String,
  },
  description: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

export const SubSection = mongoose.model('SubSection', subsectionSchema);
