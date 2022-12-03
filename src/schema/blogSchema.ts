import mongoose, { Document, Schema } from "mongoose";
import { Blog } from "./interfaces";

export interface blogDocument extends Document {
  title: string;
  body: string;
  tags: string[];
}

const blogSchema = new Schema<Blog>(
  {
    title: {
      type: String,
      unique: true,
      require: [true, "Title is required."],
      maxLength: [30, "Tittle length should not be more than 30 Character."],
      trim: true,
    },
    body: {
      type: String,
      require: [true, "Body is required."],
      trim: true,
    },
    tags: {
      type: [String],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model<Blog>("blog", blogSchema);

export default model;
