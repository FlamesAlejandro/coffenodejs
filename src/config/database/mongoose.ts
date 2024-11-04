import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/coffeeshopdb';

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectMongo;
