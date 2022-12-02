import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import {
  createBlog,
  updateBlog,
  findBlog,
  deleteBlogs,
} from "../services/services";
import blogSchema, { blogDocument } from "../Schema/blogSchema";

export const home = (req: Request, res: Response): void => {
  res.status(200).send("<h1>Hello User Welcome To Backend</h1>");
};

export const addBlog = async (req: Request, res: Response) => {
  try {
    const { title, body, tags } = req.body;

    if (!(title && body)) {
      return res.status(400).json({
        success: false,
        error: "title and body are compulsory.",
      });
    }

    const existingBlog = await blogSchema.findOne({ title });
    if (existingBlog) {
      return res.status(400).json({
        success: false,
        error: "Blog with this title already exists.",
      });
    }

    const tagsArray = tags ? tags.split(",") : [];

    const blog: DocumentDefinition<blogDocument> = {
      title,
      body,
      tags: tagsArray,
    };

    const newBlog = await createBlog(blog);
    res.status(200).json({ success: true, blog: newBlog });
  } catch (err: any) {
    console.log(err.message);
    res.json({ success: false, error: err.message });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    const blogs = await findBlog();

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const editBlog = async (req: Request, res: Response) => {
  try {
    const { title, body, tags } = req.body;
    const id: string = req.params.id;

    if (!(title && body)) {
      return res.status(400).json({
        success: false,
        error: "title and body are compulsory.",
      });
    }

    const tagsArray = tags ? tags.split(",") : [];

    const blog: DocumentDefinition<blogDocument> = {
      title,
      body,
      tags: tagsArray,
    };
    const updatedBlog = await updateBlog({ id }, blog);

    res.status(200).json({ success: true, blog: updatedBlog });
  } catch (err: any) {
    console.log(err.message);
    res.json({ success: false, error: err.message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const blog = await deleteBlogs({ id });

    res.status(200).json({
      success: true,
      message: "Blog Deleted.",
      blog,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
