export type IApiResponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string | null;
    meta?: {
        page: number;
        size: number;
        total: number;
        totalPage: number;
    };
    data?: T | null;
};

export type Service = {
    id: string;
    name: string;
    image: string;
    description: string;
    estimatetime: number;
    createdAt: string;
    updatedAt: string;
};
