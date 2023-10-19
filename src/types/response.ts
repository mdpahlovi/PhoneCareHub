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
    reviews: Review[];
};

export type Blog = {
    id: string;
    image: string;
    title: string;
    content: string;
    source: number;
    publishedDate: string;
    createdAt: string;
    updatedAt: string;
};

export type FAQ = {
    id: string;
    serial: number;
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
};

export type Admin = {
    id: string;
    name: string;
    role: "admin";
    image: string;
    email: string;
    phone: string | null;
    createdAt: string;
};

export type User = {
    id: string;
    name: string;
    role: "user";
    image: string;
    email: string;
    phone: string | null;
    address: string | null;
    birthdate: string | null;
    gender: string | null;
    createdAt: string;
};

export type OfflineAppointment = {
    id: string;
    userId: string;
    serviceId: string;
    deviceInfo: string;
    issueDescription: string;
    appointmentDate: string;
    status: string;
    paymentAmount: number | null;
    issueDidected: string[];
    createdAt: string;
    updatedAt: string;
    user: User;
    service: Service;
};

export type OnlineAppointment = {
    id: string;
    userId: string;
    serviceId: string;
    deviceInfo: string;
    issueDescription: string;
    shippingAddress: string;
    status: string;
    paymentAmount: number | null;
    issueDidected: string[];
    deliveryDate: string | null;
    createdAt: string;
    updatedAt: string;
    user: User;
    service: Service;
    payment?: Payment;
};

export type Payment = {
    id: string;
    onlineAppointmentId: string;
    method: string;
    amount: number;
    transactionId: string;
    paymentDate: string;
};

export type Review = {
    id: string;
    userId: string;
    serviceId: string;
    rating: number;
    comment: string;
    createdAt: string;
    user: User;
    service: User;
};
