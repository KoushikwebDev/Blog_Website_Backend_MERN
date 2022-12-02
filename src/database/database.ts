import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { ATLAS_MONGO_URL } = process.env;

const connectToDB = () => {
  mongoose
    .connect(String(ATLAS_MONGO_URL))
    .then((conn) => {
      console.log(
        `Database Connection Successfully to ${conn.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

export default connectToDB;
