import express from "express";
import {
  home,
  addBlog,
  getBlog,
  editBlog,
  deleteBlog,
} from "../Controllers/userControllers";

const router = express.Router();

router.get("/", home);
router.post("/add", addBlog);
router.get("/get", getBlog);
router.put("/edit/:id", editBlog);
router.delete("/delete/:id", deleteBlog);

export default router;
