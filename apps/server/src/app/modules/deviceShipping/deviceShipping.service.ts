import { DeviceShipping } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createDeviceShipping = async (payload: DeviceShipping) => {
    const { onlineAppointmentId, ...data } = payload;
    const result = await prisma.onlineAppointment.update({
        where: { id: onlineAppointmentId },
        data: { status: "shipping", deviceShipping: { create: { ...data } } },
    });

    return result;
};

const updateDeviceShipping = async (payload: Partial<DeviceShipping>, id: string) => {
    const result = await prisma.deviceShipping.update({ where: { id }, data: payload });

    return result;
};

const deleteDeviceShipping = async (id: string) => {
    const result = await prisma.deviceShipping.delete({ where: { id } });

    return result;
};

export const DeviceShippingService = { createDeviceShipping, updateDeviceShipping, deleteDeviceShipping };
