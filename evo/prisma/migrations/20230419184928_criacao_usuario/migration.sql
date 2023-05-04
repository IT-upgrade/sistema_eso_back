-- CreateEnum
CREATE TYPE "UsersRole" AS ENUM ('USER', 'ADIMIN', 'SUPER');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "roles" "UsersRole" NOT NULL DEFAULT 'USER',
    "criacao" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
