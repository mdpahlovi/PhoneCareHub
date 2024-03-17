/*
  Warnings:

  - You are about to drop the column `publishedAt` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `publishedDate` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `faqs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "publishedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publishedDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "faqs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
