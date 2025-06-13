import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database Connect Successfully');
  } catch (error) {
    console.log('database error', error);
  }
};

export default connectdb;
