import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { OfflineAppointmentController } from "./offlineAppointment.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), OfflineAppointmentController.createOfflineAppointment);

router.get("/", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OfflineAppointmentController.getAllOfflineAppointment);

router.get("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OfflineAppointmentController.getSingleOfflineAppointment);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OfflineAppointmentController.updateOfflineAppointment);

router.delete("/:id", auth(USER_ROLE.ADMIN), OfflineAppointmentController.deleteOfflineAppointment);

export const OfflineAppointmentRoutes = router;
