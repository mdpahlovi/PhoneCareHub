import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.ADMIN), UserController.createUser);

router.get("/", auth(USER_ROLE.ADMIN), UserController.getAllUser);

router.get("/:id", auth(USER_ROLE.ADMIN), UserController.getSingleUser);

router.patch("/:id", auth(USER_ROLE.ADMIN), UserController.updateUser);

router.delete("/:id", auth(USER_ROLE.ADMIN), UserController.deleteUser);

export const UserRoutes = router;
