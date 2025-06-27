import express from "express";
import {
  addBlog,
  deletBlogById,
  getAllBlogs,
  getBlogById,
  togglepublish,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);

blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete",auth, deletBlogById);
blogRouter.post("/toggle-publish", auth, togglepublish);


export default blogRouter;
