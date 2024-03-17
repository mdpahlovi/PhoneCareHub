import { DeviceReturned } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createDeviceReturned = async (payload: DeviceReturned) => {
    const { onlineAppointmentId, ...data } = payload;
    const result = await prisma.onlineAppointment.update({
        where: { id: onlineAppointmentId },
        data: { status: "returned", deviceReturned: { create: { ...data } } },
    });

    return result;
};

const updateDeviceReturned = async (payload: Partial<DeviceReturned>, id: string) => {
    const result = await prisma.deviceReturned.update({ where: { id }, data: payload });

    return result;
};

const deleteDeviceReturned = async (id: string) => {
    const result = await prisma.deviceReturned.delete({ where: { id } });

    return result;
};

export const DeviceReturnedService = { createDeviceReturned, updateDeviceReturned, deleteDeviceReturned };
