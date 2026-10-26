import mongoose from 'mongoose';

/**
 * Connect to MongoDB database
 * Uses a 5-second connection timeout and provides beginner-friendly diagnostics.
 */
const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai-resume-maker';
  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.warn(`\n⚠️  [MongoDB Notice]: Could not connect to MongoDB at ${mongoURI}`);
    console.warn(`👉 Details: ${error.message}`);
    console.warn(`💡 Tip: Make sure your local MongoDB service is running or provide your MongoDB Atlas URI in server/.env.\n`);
  }
};

export default connectDB;
