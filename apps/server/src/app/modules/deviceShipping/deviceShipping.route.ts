import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { DeviceShippingController } from "./deviceShipping.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER, USER_ROLE.ADMIN), DeviceShippingController.createDeviceShipping);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), DeviceShippingController.updateDeviceShipping);

router.delete("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), DeviceShippingController.deleteDeviceShipping);

export const DeviceShippingRoutes = router;
