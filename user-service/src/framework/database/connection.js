import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async (config) => {
  try {
    await mongoose.connect(config.mongo.uri);
    console.log("User Service DB Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
