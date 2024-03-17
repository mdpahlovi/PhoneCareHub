import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { OnlineAppointmentController } from "./onlineAppointment.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), OnlineAppointmentController.createOnlineAppointment);

router.get("/", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OnlineAppointmentController.getAllOnlineAppointment);

router.get("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OnlineAppointmentController.getSingleOnlineAppointment);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OnlineAppointmentController.updateOnlineAppointment);

router.delete("/:id", auth(USER_ROLE.ADMIN), OnlineAppointmentController.deleteOnlineAppointment);

export const OnlineAppointmentRoutes = router;
