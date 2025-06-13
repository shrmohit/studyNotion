import mongoose from 'mongoose';

const sectionSchema = mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
  },
  subSection: [
    {
      type: String,
      ref: 'SubSection',
    },
  ],
});

export const Section = mongoose.model('Section', sectionSchema);
