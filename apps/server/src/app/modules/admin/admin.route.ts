import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AdminController } from "./admin.controller";
import { AdminValidation } from "./admin.validation";

const router = express.Router();

router.post("/create", auth(USER_ROLE.SUPERADMIN), validateRequest(AdminValidation.createAdmin), AdminController.createAdmin);

router.get("/", auth(USER_ROLE.SUPERADMIN), AdminController.getAllAdmin);

router.get("/team", AdminController.getTeamAdmin);

router.get("/:id", auth(USER_ROLE.SUPERADMIN), AdminController.getSingleAdmin);

router.patch("/:id", auth(USER_ROLE.SUPERADMIN), AdminController.updateAdmin);

router.delete("/:id", auth(USER_ROLE.SUPERADMIN), AdminController.deleteAdmin);

export const AdminRoutes = router;
