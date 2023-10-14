import { format, parseISO } from "date-fns";
import { Admin, User } from "@/types/response";

export const getUserInitialValues = (profile: User) => {
    const name = profile?.name ? profile.name : "";
    const email = profile?.email ? profile.email : "";
    const phone = profile?.phone ? profile.phone : "";
    const address = profile?.address ? profile.address : "";
    const birthdate = profile?.birthdate ? format(parseISO(profile.birthdate), "y-M-d") : "";
    const gender = profile?.gender ? profile.gender : "";

    return { name, email, phone, address, birthdate, gender };
};

export const getAdminInitialValues = (profile: Admin) => {
    const name = profile?.name ? profile.name : "";
    const email = profile?.email ? profile.email : "";
    const phone = profile?.phone ? profile.phone : "";

    return { name, email, phone };
};
