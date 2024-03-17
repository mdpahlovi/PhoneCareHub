import express from "express";
import { AdminRoutes } from "../modules/admin/admin.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { DeviceReturnedRoutes } from "../modules/deviceReturned/deviceReturned.route";
import { DeviceShippingRoutes } from "../modules/deviceShipping/deviceShipping.route";
import { FAQRoutes } from "../modules/faq/faq.route";
import { OfflineAppointmentRoutes } from "../modules/offlineBooking/offlineAppointment.route";
import { OnlineAppointmentRoutes } from "../modules/onlineBooking/onlineAppointment.route";
import { PaymentRoutes } from "../modules/payment/payment.route";
import { ProfileRoutes } from "../modules/profile/profile.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { ServiceRoutes } from "../modules/service/service.route";
import { UserRoutes } from "../modules/user/user.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/service",
        route: ServiceRoutes,
    },
    {
        path: "/onlineAppointment",
        route: OnlineAppointmentRoutes,
    },
    {
        path: "/offlineAppointment",
        route: OfflineAppointmentRoutes,
    },
    {
        path: "/deviceShipping",
        route: DeviceShippingRoutes,
    },
    {
        path: "/payment",
        route: PaymentRoutes,
    },
    {
        path: "/deviceReturned",
        route: DeviceReturnedRoutes,
    },
    {
        path: "/review",
        route: ReviewRoutes,
    },
    {
        path: "/user",
        route: UserRoutes,
    },
    {
        path: "/admin",
        route: AdminRoutes,
    },
    {
        path: "/profile",
        route: ProfileRoutes,
    },
    {
        path: "/blog",
        route: BlogRoutes,
    },
    {
        path: "/faq",
        route: FAQRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
