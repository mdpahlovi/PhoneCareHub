import { useSession } from "next-auth/react";
import BookIcon from "@mui/icons-material/Book";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type RouteType = { href: string; text: string; icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string } };

export default function useDashboardLinks(): RouteType[] {
    const { data } = useSession();

    let routes: RouteType[] = [];
    switch (data?.user?.role) {
        case "user":
            routes = [onlineAppointments, offlineAppointments, feedback];
            break;
        case "admin":
            routes = [users, services, manageOnlineAppointments, manageOfflineAppointments, blogs, faq];
            break;
        case "superadmin":
            routes = [admins, create_admin];
            break;
    }

    return [dashboard, ...routes];
}

// All Dashboard Routes
const dashboard = { href: "/dashboard", text: "Dashboard", icon: DashboardRoundedIcon };
const onlineAppointments = { href: "/dashboard/onlineAppointments", text: "Online Appointments", icon: BookIcon };
const offlineAppointments = { href: "/dashboard/offlineAppointments", text: "Offline Appointments", icon: LocalLibraryIcon };
const feedback = { href: "/dashboard/feedback", text: "Give Feedback", icon: RssFeedRoundedIcon };
const users = { href: "/dashboard/users", text: "Manage Users", icon: GroupRoundedIcon };
const services = { href: "/dashboard/services", text: "Manage Services", icon: StyleRoundedIcon };
const manageOnlineAppointments = { href: "/dashboard/mOnlineAppointments", text: "Online Appointments", icon: BookIcon };
const manageOfflineAppointments = { href: "/dashboard/mOfflineAppointments", text: "Offline Appointments", icon: LocalLibraryIcon };
const blogs = { href: "/dashboard/blogs", text: "Manage Blogs", icon: LibraryBooksRoundedIcon };
const faq = { href: "/dashboard/faq", text: "Manage FAQs", icon: LiveHelpRoundedIcon };
const admins = { href: "/dashboard/admins", text: "Manage Admins", icon: GroupRoundedIcon };
const create_admin = { href: "/dashboard/create-admin", text: "Create Admin", icon: PersonAddAltRoundedIcon };
