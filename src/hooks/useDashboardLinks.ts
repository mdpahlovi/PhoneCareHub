import { useSession } from "next-auth/react";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
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
            routes = [my_bookings, feedback];
            break;
        case "admin":
            routes = [users, services, bookings, blogs, faq];
            break;
        case "superadmin":
            routes = [users, admins, create_admin];
            break;
    }

    return [dashboard, ...routes];
}

// All Dashboard Routes
const dashboard = { href: "/dashboard", text: "Dashboard", icon: DashboardRoundedIcon };
const my_bookings = { href: "/dashboard/my_bookings", text: "My Bookings", icon: WidgetsRoundedIcon };
const feedback = { href: "/dashboard/feedback", text: "Give Feedback", icon: RssFeedRoundedIcon };
const users = { href: "/dashboard/users", text: "Manage Users", icon: GroupRoundedIcon };
const services = { href: "/dashboard/services", text: "Manage Services", icon: StyleRoundedIcon };
const bookings = { href: "/dashboard/bookings", text: "Manage Bookings", icon: WidgetsRoundedIcon };
const blogs = { href: "/dashboard/blogs", text: "Manage Blogs", icon: LibraryBooksRoundedIcon };
const faq = { href: "/dashboard/faq", text: "Manage FAQs", icon: LiveHelpRoundedIcon };
const admins = { href: "/dashboard/admins", text: "Manage Admins", icon: GroupRoundedIcon };
const create_admin = { href: "/dashboard/create_admin", text: "Create Admin", icon: PersonAddAltRoundedIcon };
