import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { ReviewController } from "./review.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER, USER_ROLE.ADMIN), ReviewController.createReview);

router.get("/", ReviewController.getAllReview);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), ReviewController.updateReview);

router.delete("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), ReviewController.deleteReview);

export const ReviewRoutes = router;
