/*
  Warnings:

  - You are about to drop the column `type` on the `admins` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'superadmin';

-- AlterTable
ALTER TABLE "admins" DROP COLUMN "type";

-- DropEnum
DROP TYPE "AdminType";
