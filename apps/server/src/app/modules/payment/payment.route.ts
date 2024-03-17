import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { PaymentController } from "./payment.controller";

const router = express.Router();

router.post("/init/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), PaymentController.initPayment);

router.get("/success/:id", PaymentController.successPayment);

router.get("/cancel/:id", PaymentController.cancelPayment);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), PaymentController.updatePayment);

router.delete("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), PaymentController.deletePayment);

export const PaymentRoutes = router;
