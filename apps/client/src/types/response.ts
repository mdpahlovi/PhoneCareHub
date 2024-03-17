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
    title: string;
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
    status: OfflineAppointmentStatus;
    paymentAmount: number | null;
    issueDetected: string[];
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
    status: OnlineAppointmentStatus;
    paymentAmount: number | null;
    issueDetected: string[];
    deliveryDate: string | null;
    createdAt: string;
    updatedAt: string;
    user: User;
    service: Service;
    payment?: Payment;
    deviceShipping?: DeviceShipping;
    deviceReturned?: DeviceReturned;
};

type DeviceShipping = {
    id: string;
    onlineAppointmentId: string;
    courierName: string;
    productId: string;
    receiptDate: string;
    createdAt: string;
    updatedAt: string;
};

export type Payment = {
    id: string;
    onlineAppointmentId: string;
    method: string;
    amount: number;
    transactionId: string;
    paymentDate: string;
};

type DeviceReturned = {
    id: string;
    onlineAppointmentId: string;
    courierName: string;
    productId: string;
    receiptDate: string;
    createdAt: string;
    updatedAt: string;
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

export type OnlineAppointmentStatus =
    | "pending"
    | "shipping"
    | "receited"
    | "reviewing"
    | "payment"
    | "repairing"
    | "returned"
    | "received"
    | "cancelled";

export type OfflineAppointmentStatus = "pending" | "completed" | "cancelled";
