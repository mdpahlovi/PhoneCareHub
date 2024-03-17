/*
  Warnings:

  - You are about to drop the column `issueDidected` on the `offline_appointments` table. All the data in the column will be lost.
  - The `status` column on the `offline_appointments` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `issueDidected` on the `online_appointments` table. All the data in the column will be lost.
  - The `status` column on the `online_appointments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OnlineAppointmentStatus" AS ENUM ('pending', 'shipping', 'receited', 'reviewing', 'payment', 'repairing', 'returned', 'received', 'cancelled');

-- CreateEnum
CREATE TYPE "OfflineAppointmentStatus" AS ENUM ('pending', 'completed', 'cancelled');

-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "offline_appointments" DROP COLUMN "issueDidected",
ADD COLUMN     "issueDetected" TEXT[],
DROP COLUMN "status",
ADD COLUMN     "status" "OfflineAppointmentStatus" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "online_appointments" DROP COLUMN "issueDidected",
ADD COLUMN     "issueDetected" TEXT[],
DROP COLUMN "status",
ADD COLUMN     "status" "OnlineAppointmentStatus" NOT NULL DEFAULT 'pending';

-- DropEnum
DROP TYPE "AppointmentStatus";

-- CreateTable
CREATE TABLE "device_shipping" (
    "id" TEXT NOT NULL,
    "onlineAppointmentId" TEXT NOT NULL,
    "courierName" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "receiptDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_shipping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_returned" (
    "id" TEXT NOT NULL,
    "onlineAppointmentId" TEXT NOT NULL,
    "courierName" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "receiptDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_returned_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "device_shipping_onlineAppointmentId_key" ON "device_shipping"("onlineAppointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "device_returned_onlineAppointmentId_key" ON "device_returned"("onlineAppointmentId");

-- AddForeignKey
ALTER TABLE "device_shipping" ADD CONSTRAINT "device_shipping_onlineAppointmentId_fkey" FOREIGN KEY ("onlineAppointmentId") REFERENCES "online_appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_returned" ADD CONSTRAINT "device_returned_onlineAppointmentId_fkey" FOREIGN KEY ("onlineAppointmentId") REFERENCES "online_appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
