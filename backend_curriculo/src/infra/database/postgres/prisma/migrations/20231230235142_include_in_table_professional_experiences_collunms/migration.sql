/*
  Warnings:

  - Added the required column `date_init` to the `professional_experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "professional_experiences" ADD COLUMN     "date_end" TIMESTAMP(3),
ADD COLUMN     "date_init" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_atual_job" BOOLEAN NOT NULL DEFAULT false;
