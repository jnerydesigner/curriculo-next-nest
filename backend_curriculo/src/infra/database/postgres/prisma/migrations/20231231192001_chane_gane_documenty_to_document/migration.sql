/*
  Warnings:

  - You are about to drop the column `documenty` on the `personal_datas` table. All the data in the column will be lost.
  - Added the required column `document` to the `personal_datas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personal_datas" DROP COLUMN "documenty",
ADD COLUMN     "document" TEXT NOT NULL;
