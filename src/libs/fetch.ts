import { BASE_URL } from "@/exports/axios";
import { IApiResponse, Service } from "@/types/response";

export async function getallservices(search: string, page: number): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?page=${page}&search=${search}`);
    if (!res.ok) throw new Error("Failed To Fetch Data");

    return res.json();
}
