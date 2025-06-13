import mongoose from 'mongoose';

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
      ref: 'Subsection',
    },
  ],
});

export const Tag = mongoose.model('Tag', tagSchema);
