import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";

import blogSchema, { blogDocument } from "../Schema/blogSchema";

export function createBlog(input: DocumentDefinition<blogDocument>) {
  return blogSchema.create(input);
}

export function findBlog() {
  // query: FilterQuery<TodoDocument>,
  // options: QueryOptions = { lean: true }
  return blogSchema.find();
}

export function updateBlog(
  query: FilterQuery<blogDocument>,
  update: UpdateQuery<blogDocument>,
  options: QueryOptions = { new: true }
) {
  return blogSchema.findOneAndUpdate(query, update, options);
}

export function deleteBlogs(query: FilterQuery<blogDocument>) {
  return blogSchema.deleteOne(query);
}
