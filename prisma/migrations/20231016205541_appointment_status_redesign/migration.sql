/*
  Warnings:

  - The values [paymentPending] on the enum `AppointmentStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AppointmentStatus_new" AS ENUM ('pending', 'reviewing', 'payment', 'servicing', 'completed', 'cancelled');
ALTER TABLE "OnlineAppointment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "OfflineAppointment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "OnlineAppointment" ALTER COLUMN "status" TYPE "AppointmentStatus_new" USING ("status"::text::"AppointmentStatus_new");
ALTER TABLE "OfflineAppointment" ALTER COLUMN "status" TYPE "AppointmentStatus_new" USING ("status"::text::"AppointmentStatus_new");
ALTER TYPE "AppointmentStatus" RENAME TO "AppointmentStatus_old";
ALTER TYPE "AppointmentStatus_new" RENAME TO "AppointmentStatus";
DROP TYPE "AppointmentStatus_old";
ALTER TABLE "OnlineAppointment" ALTER COLUMN "status" SET DEFAULT 'pending';
ALTER TABLE "OfflineAppointment" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;
