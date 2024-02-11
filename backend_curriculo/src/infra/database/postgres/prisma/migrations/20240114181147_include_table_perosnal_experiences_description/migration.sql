-- CreateTable
CREATE TABLE "professional_experiences_description" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "professional_experiences_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "professional_experiences_description_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "professional_experiences_description" ADD CONSTRAINT "professional_experiences_description_professional_experien_fkey" FOREIGN KEY ("professional_experiences_id") REFERENCES "professional_experiences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_experiences_description" ADD CONSTRAINT "professional_experiences_description_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
