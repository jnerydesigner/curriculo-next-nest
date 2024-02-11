/*
  Warnings:

  - You are about to drop the column `is_atual_job` on the `professional_experiences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "professional_experiences" DROP COLUMN "is_atual_job",
ADD COLUMN     "is_actual_job" BOOLEAN NOT NULL DEFAULT false;
