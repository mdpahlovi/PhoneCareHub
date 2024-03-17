/*
  Warnings:

  - You are about to drop the column `appointmentTime` on the `OfflineAppointment` table. All the data in the column will be lost.
  - Added the required column `deviceInfo` to the `OfflineAppointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issueDescription` to the `OfflineAppointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OfflineAppointment" DROP COLUMN "appointmentTime",
ADD COLUMN     "deviceInfo" TEXT NOT NULL,
ADD COLUMN     "issueDescription" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pending';
