import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connnectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `DB Connected Succesfully at host ${connnectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Unable to conned DB", error);
    process.exit(1);
  }
};

export default connectDB;
