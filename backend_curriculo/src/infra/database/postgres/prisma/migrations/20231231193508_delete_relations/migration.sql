/*
  Warnings:

  - You are about to drop the column `address_id` on the `personal_datas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "personal_datas" DROP CONSTRAINT "personal_datas_address_id_fkey";

-- AlterTable
ALTER TABLE "personal_datas" DROP COLUMN "address_id";
