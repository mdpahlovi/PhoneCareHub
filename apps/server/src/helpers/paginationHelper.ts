export type IOptions = {
    page?: number;
    size?: number;
    sortBy?: string;
    sortOrder?: string;
};

export type IOptionsResult = {
    page: number;
    size: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
};

export const calculateOptions = (options: IOptions): IOptionsResult => {
    const page = Number(options.page || 1);
    const size = Number(options.size || 6);
    const skip = (page - 1) * size;

    const sortBy = options.sortBy || "createdAt";
    const sortOrder = options.sortOrder || "desc";

    return {
        page,
        size,
        skip,
        sortBy,
        sortOrder,
    };
};
