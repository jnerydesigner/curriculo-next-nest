/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `habilities` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "habilities_slug_key" ON "habilities"("slug");
