import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { ProfileController } from "./profile.controller";

const router = express.Router();

router.get("/", auth(USER_ROLE.USER, USER_ROLE.ADMIN, USER_ROLE.SUPERADMIN), ProfileController.getUserProfile);

router.patch("/", auth(USER_ROLE.USER, USER_ROLE.ADMIN, USER_ROLE.SUPERADMIN), ProfileController.updateProfile);

export const ProfileRoutes = router;
