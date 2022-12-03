import express from "express";
import {
  home,
  addBlog,
  getBlog,
  editBlog,
  deleteBlog,
  notFound,
} from "../controllers/userControllers";

const router: express.Router = express.Router();

router.get("/", home);
router.post("/api/v1/add", addBlog);
router.get("/api/v1/get", getBlog);
router.put("/api/v1/edit/:id", editBlog);
router.delete("/api/v1/delete/:id", deleteBlog);
router.get("*", notFound);

export default router;
