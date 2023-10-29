import { BASE_URL } from "@/exports/axios";
import { Admin, Blog, FAQ, IApiResponse, Review, Service } from "@/types/response";

export async function getAllService(size: number): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?size=${size}`);
    return res.json();
}

export async function getAllReview(): Promise<IApiResponse<Review[]>> {
    const res = await fetch(`${BASE_URL}/review`);
    return res.json();
}

export async function getAllBlog(size: number): Promise<IApiResponse<Blog[]>> {
    const res = await fetch(`${BASE_URL}/blog?size=${size}`);
    return res.json();
}

export async function getAllFAQ(): Promise<IApiResponse<FAQ[]>> {
    const res = await fetch(`${BASE_URL}/faq`);
    return res.json();
}

export async function getTeamAdmin(): Promise<IApiResponse<Admin[]>> {
    const res = await fetch(`${BASE_URL}/admin/team`);
    return res.json();
}
