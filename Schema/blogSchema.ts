import mongoose, { Document, Schema } from "mongoose";
import { Blog } from "./interfaces";

export interface blogDocument extends Document {
  title: string;
  body: string;
  tags: string[];
}

const blogSchema = new Schema<Blog>({
  title: {
    type: String,
    unique: true,
    require: [true, "Title is required."],
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
});

const model = mongoose.model<Blog>("blog", blogSchema);

export default model;
