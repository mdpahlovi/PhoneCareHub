import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { BlogController } from "./blog.controller";
import { BlogValidation } from "./blog.validation";

const router = express.Router();

router.post("/create", auth(USER_ROLE.ADMIN), validateRequest(BlogValidation.createBlog), BlogController.createBlog);

router.get("/", BlogController.getAllBlog);

router.get("/:id", BlogController.getSingleBlog);

router.patch("/:id", auth(USER_ROLE.ADMIN), validateRequest(BlogValidation.updateBlog), BlogController.updateBlog);

router.delete("/:id", auth(USER_ROLE.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;
