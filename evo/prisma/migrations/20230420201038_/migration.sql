/*
  Warnings:

  - Made the column `cargoId` on table `pessoas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `empresaId` on table `pessoas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "pessoas" DROP CONSTRAINT "pessoas_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "pessoas" DROP CONSTRAINT "pessoas_empresaId_fkey";

-- AlterTable
ALTER TABLE "pessoas" ALTER COLUMN "cargoId" SET NOT NULL,
ALTER COLUMN "empresaId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
