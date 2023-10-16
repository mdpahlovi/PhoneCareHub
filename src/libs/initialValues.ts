import { parseISO } from "date-fns";
import { Admin, Blog, Service, User } from "@/types/response";

export const getUserInitialValues = (profile: User) => {
    const name = profile?.name ? profile.name : "";
    const email = profile?.email ? profile.email : "";
    const phone = profile?.phone ? profile.phone : "";
    const address = profile?.address ? profile.address : "";
    const birthdate = profile?.birthdate ? parseISO(profile.birthdate) : "";
    const gender = profile?.gender ? profile.gender : "";

    return { name, email, phone, address, birthdate, gender };
};

export const getAdminInitialValues = (profile: Admin) => {
    const name = profile?.name ? profile.name : "";
    const email = profile?.email ? profile.email : "";
    const phone = profile?.phone ? profile.phone : "";

    return { name, email, phone };
};

export const getBlogInitialValues = (blog: Blog) => {
    const title = blog?.title ? blog.title : "";
    const content = blog?.content ? blog.content : "";
    const source = blog?.source ? blog.source : "";
    const publishedDate = blog?.publishedDate ? parseISO(blog.publishedDate) : "";

    return { title, content, source, publishedDate };
};

export const getServiceInitialValues = (service: Service) => {
    const name = service?.name ? service.name : "";
    const description = service?.description ? service.description : "";
    const estimatetime = service?.estimatetime ? service.estimatetime : "";

    return { name, description, estimatetime };
};
