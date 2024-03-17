/*
  Warnings:

  - You are about to drop the column `bookingId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the `bookings` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[onlineAppointmentId]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `onlineAppointmentId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('pending', 'reviewing', 'paymentPending', 'completed', 'recived');

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_userId_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_bookingId_fkey";

-- DropIndex
DROP INDEX "payments_bookingId_key";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "bookingId",
ADD COLUMN     "onlineAppointmentId" TEXT NOT NULL;

-- DropTable
DROP TABLE "bookings";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "OnlineAppointment" (
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

    CONSTRAINT "OnlineAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfflineAppointment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "appointmentDate" TIMESTAMP(3) NOT NULL,
    "appointmentTime" TEXT NOT NULL,
    "status" "AppointmentStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfflineAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_onlineAppointmentId_key" ON "payments"("onlineAppointmentId");

-- AddForeignKey
ALTER TABLE "OnlineAppointment" ADD CONSTRAINT "OnlineAppointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OnlineAppointment" ADD CONSTRAINT "OnlineAppointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfflineAppointment" ADD CONSTRAINT "OfflineAppointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OfflineAppointment" ADD CONSTRAINT "OfflineAppointment_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_onlineAppointmentId_fkey" FOREIGN KEY ("onlineAppointmentId") REFERENCES "OnlineAppointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
