import { useSession } from "next-auth/react";

type RouteType = { href: string; text: string; button?: boolean };

export default function useNavLinks(): RouteType[] {
    const { data } = useSession();
    const defaultRoutes = [home, about, services];

    let routes: RouteType[] = [];
    if (data?.user) {
        routes = [dashboard];
    } else {
        routes = [login];
    }

    return [...defaultRoutes, ...routes];
}

// All Navbar Routes
const home = { href: "/", text: "Home" };
const about = { href: "/about", text: "About" };
const services = { href: "/services", text: "Services" };
const login = { href: "/login", text: "Login / Register", button: true };
const dashboard = { href: "/dashboard", text: "Dashboard", button: true };
