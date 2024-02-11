/*
  Warnings:

  - You are about to drop the column `quantityStars` on the `languages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "languages" DROP COLUMN "quantityStars",
ADD COLUMN     "stars" INTEGER NOT NULL DEFAULT 0;
