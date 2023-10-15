import { BASE_URL } from "@/exports/axios";
import { Admin, IApiResponse, Service, User } from "@/types/response";

export async function getallservices(size: number, page: number, search: string): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?size=${size}&page=${page}&search=${search}`, {
        cache: "no-cache",
        next: { tags: ["services"] },
    });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}

export async function getalladmins(token: string | undefined, page: number, size: number): Promise<IApiResponse<Admin[]>> {
    const res = await fetch(`${BASE_URL}/admin?page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        next: { tags: ["admins"] },
        headers: { authorization: token! },
    });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}

export async function getallusers(token: string | undefined, page: number, size: number): Promise<IApiResponse<User[]>> {
    const res = await fetch(`${BASE_URL}/user?page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        next: { tags: ["users"] },
        headers: { authorization: token! },
    });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}

export async function getprofile(token: string | undefined): Promise<IApiResponse<Admin | User>> {
    const res = await fetch(`${BASE_URL}/profile`, { cache: "no-cache", next: { tags: ["profile"] }, headers: { authorization: token! } });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}
