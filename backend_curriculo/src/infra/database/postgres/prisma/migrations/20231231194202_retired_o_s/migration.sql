/*
  Warnings:

  - You are about to drop the `personal_datas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "personal_datas" DROP CONSTRAINT "personal_datas_user_id_fkey";

-- DropTable
DROP TABLE "personal_datas";

-- CreateTable
CREATE TABLE "personal_data" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "personal_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personal_data" ADD CONSTRAINT "personal_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
