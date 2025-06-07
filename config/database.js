const mongoose = require('mongoose');

require('dotenv').config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database Connect Successfully');
  } catch (error) {
    console.log('database error', error);
  }
};

module.exports = connectdb;
