import { useSession } from "next-auth/react";

type RouteType = { href: string; text: string; button?: boolean };

export default function useNavLinks() {
    const { data } = useSession();

    let routes: RouteType[] = [home, about, services];
    if (data?.user) {
        return [...routes, dashboard];
    } else {
        return [...routes, login];
    }
}

// All Navbar Routes
const home = { href: "/", text: "Home" };
const about = { href: "/about", text: "About" };
const services = { href: "/services", text: "Services" };
const login = { href: "/login", text: "Login / Register", button: true };
const dashboard = { href: "/dashboard", text: "Dashboard", button: true };
