export type IGenericResponse<T> = {
    meta: {
        page: number;
        size: number;
        total: number;
        totalPage: number;
    };
    data: T;
};
