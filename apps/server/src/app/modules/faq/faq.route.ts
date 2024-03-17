import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { FAQController } from "./faq.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.ADMIN), FAQController.createFAQ);

router.get("/", FAQController.getAllFAQ);

router.get("/:id", FAQController.getSingleFAQ);

router.patch("/:id", auth(USER_ROLE.ADMIN), FAQController.updateFAQ);

router.delete("/:id", auth(USER_ROLE.ADMIN), FAQController.deleteFAQ);

export const FAQRoutes = router;
