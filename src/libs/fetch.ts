import { BASE_URL } from "@/exports/axios";
import { Admin, Blog, FAQ, IApiResponse, OfflineAppointment, OnlineAppointment, Service, User } from "@/types/response";

export async function getallservices(size: number, page: number, search: string): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?size=${size}&page=${page}&search=${search}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getservice(id: string): Promise<IApiResponse<Service>> {
    const res = await fetch(`${BASE_URL}/service/${id}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallblogs(size: number, page: number, search: string): Promise<IApiResponse<Blog[]>> {
    const res = await fetch(`${BASE_URL}/blog?size=${size}&page=${page}&search=${search}`, { cache: "no-cache" });
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}

export async function getblog(id: string): Promise<IApiResponse<Blog>> {
    const res = await fetch(`${BASE_URL}/blog/${id}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallfaqs(): Promise<IApiResponse<FAQ[]>> {
    const res = await fetch(`${BASE_URL}/faq`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getalladmins(token: string | undefined, page: number, size: number): Promise<IApiResponse<Admin[]>> {
    const res = await fetch(`${BASE_URL}/admin?page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallusers(token: string | undefined, page: number, size: number): Promise<IApiResponse<User[]>> {
    const res = await fetch(`${BASE_URL}/user?page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getprofile(token: string | undefined): Promise<IApiResponse<Admin | User>> {
    const res = await fetch(`${BASE_URL}/profile`, { cache: "no-cache", headers: { authorization: token! } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallOfflineAppointment(
    token: string | undefined,
    size: number,
    page: number,
    status: string
): Promise<IApiResponse<OfflineAppointment[]>> {
    const res = await fetch(`${BASE_URL}/offlineAppointment/${status}?size=${size}&page=${page + 1}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallOnlineAppointment(
    token: string | undefined,
    size: number,
    page: number,
    status: string
): Promise<IApiResponse<OnlineAppointment[]>> {
    const res = await fetch(`${BASE_URL}/onlineAppointment/${status}?size=${size}&page=${page + 1}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}
