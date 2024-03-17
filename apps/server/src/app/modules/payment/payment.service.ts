import { Payment } from "@prisma/client";
import stripeFn from "stripe";
import config from "../../../config";
import prisma from "../../../shared/prisma";

const payment_url = `${config.server_url}/api/v1/payment`;
const stripe = new stripeFn(config.stripe.secret_key!);

const initPayment = async (onlineAppointmentId?: string) => {
    const appointment = await prisma.onlineAppointment.findUnique({
        where: { id: onlineAppointmentId },
        include: { service: { select: { name: true } } },
    });

    const { id, service, issueDetected, paymentAmount } = appointment!;
    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: "usd",
                    product_data: { name: service?.name, description: issueDetected.toString() },
                    unit_amount: paymentAmount! * 100,
                },
            },
        ],
        cancel_url: `${payment_url}/cancel/${id}`,
        success_url: `${payment_url}/success/${id}?session_id={CHECKOUT_SESSION_ID}`,
    });

    return session.url;
};

const successPayment = async (appointmentId: string, session_id: string) => {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    const { amount_total, payment_intent } = session;
    await prisma.onlineAppointment.update({
        where: { id: appointmentId },
        data: {
            status: "repairing",
            payment: { create: { method: "Stripe", amount: amount_total! / 100, transactionId: payment_intent as string } },
        },
    });
};

const updatePayment = async (payload: Partial<Payment>, id: string) => {
    const result = await prisma.payment.update({ where: { id }, data: payload });

    return result;
};

const deletePayment = async (id: string) => {
    const result = await prisma.payment.delete({ where: { id } });

    return result;
};

export const PaymentService = { initPayment, successPayment, updatePayment, deletePayment };
