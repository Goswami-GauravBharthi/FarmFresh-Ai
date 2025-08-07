import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

  } catch (error) {
    console.log(error);
  }
}

export default connectDB;