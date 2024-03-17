/*
  Warnings:

  - You are about to drop the `OfflineAppointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OnlineAppointment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OfflineAppointment" DROP CONSTRAINT "OfflineAppointment_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "OfflineAppointment" DROP CONSTRAINT "OfflineAppointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "OnlineAppointment" DROP CONSTRAINT "OnlineAppointment_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "OnlineAppointment" DROP CONSTRAINT "OnlineAppointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_onlineAppointmentId_fkey";

-- DropTable
DROP TABLE "OfflineAppointment";

-- DropTable
DROP TABLE "OnlineAppointment";

-- CreateTable
CREATE TABLE "online_appointments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "deviceInfo" TEXT NOT NULL,
    "issueDescription" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'pending',
    "paymentAmount" DOUBLE PRECISION,
    "issueDidected" TEXT[],
    "deliveryDate" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "online_appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offline_appointments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "deviceInfo" TEXT NOT NULL,
    "issueDescription" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'pending',
    "paymentAmount" DOUBLE PRECISION,
    "issueDidected" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "offline_appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "online_appointments" ADD CONSTRAINT "online_appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "online_appointments" ADD CONSTRAINT "online_appointments_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offline_appointments" ADD CONSTRAINT "offline_appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offline_appointments" ADD CONSTRAINT "offline_appointments_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_onlineAppointmentId_fkey" FOREIGN KEY ("onlineAppointmentId") REFERENCES "online_appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
