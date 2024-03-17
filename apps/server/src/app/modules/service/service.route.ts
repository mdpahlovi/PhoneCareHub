import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceController } from "./service.controller";
import { ServiceValidation } from "./service.validation";

const router = express.Router();

router.post("/create", auth(USER_ROLE.ADMIN), validateRequest(ServiceValidation.createService), ServiceController.createService);

router.get("/", ServiceController.getAllService);

router.get("/:id", ServiceController.getSingleService);

router.patch("/:id", auth(USER_ROLE.ADMIN), validateRequest(ServiceValidation.updateService), ServiceController.updateService);

router.delete("/:id", auth(USER_ROLE.ADMIN), ServiceController.deleteService);

export const ServiceRoutes = router;
