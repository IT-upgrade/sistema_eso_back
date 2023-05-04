/*
  Warnings:

  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `criacao` on the `usuarios` table. All the data in the column will be lost.
  - The `id` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "criacao",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "roles" SET DEFAULT 'ADMIN',
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");
