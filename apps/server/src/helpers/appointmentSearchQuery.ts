export function appointmentSearchQuery(search: string, fields: string[]) {
    return {
        OR: fields.map(field => ({
            user: {
                [field]: {
                    contains: search,
                    mode: "insensitive",
                },
            },
        })),
    };
}
