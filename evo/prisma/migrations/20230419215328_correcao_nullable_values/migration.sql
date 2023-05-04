/*
  Warnings:

  - Changed the type of `nascimento` on the `pessoas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `criacao` on the `usuarios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "pessoas" DROP CONSTRAINT "pessoas_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "pessoas" DROP CONSTRAINT "pessoas_empresaId_fkey";

-- AlterTable
ALTER TABLE "pessoas" DROP COLUMN "nascimento",
ADD COLUMN     "nascimento" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "cargoId" DROP NOT NULL,
ALTER COLUMN "empresaId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "criacao",
ADD COLUMN     "criacao" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
