import { BASE_URL } from "@/exports/axios";
import { Admin, IApiResponse, Service, User } from "@/types/response";

export async function getallservices(search: string, page: number): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?page=${page}&search=${search}`);
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}

export async function getalladmins(token: string | undefined, page: number, size: number): Promise<IApiResponse<Admin[]>> {
    const res = await fetch(`${BASE_URL}/admin?page=${page + 1}&size=${size}`, { headers: { authorization: token! } });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}

export async function getallusers(token: string | undefined, page: number, size: number): Promise<IApiResponse<User[]>> {
    const res = await fetch(`${BASE_URL}/user?page=${page + 1}&size=${size}`, { headers: { authorization: token! } });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}
