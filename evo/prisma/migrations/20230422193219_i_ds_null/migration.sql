-- DropForeignKey
ALTER TABLE "cargos" DROP CONSTRAINT "cargos_empresaId_fkey";

-- DropForeignKey
ALTER TABLE "pessoas" DROP CONSTRAINT "pessoas_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "pessoas" DROP CONSTRAINT "pessoas_empresaId_fkey";

-- AlterTable
ALTER TABLE "cargos" ALTER COLUMN "empresaId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pessoas" ALTER COLUMN "cargoId" DROP NOT NULL,
ALTER COLUMN "empresaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargos" ADD CONSTRAINT "cargos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
