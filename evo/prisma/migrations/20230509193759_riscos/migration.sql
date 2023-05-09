/*
  Warnings:

  - You are about to drop the column `riscos` on the `parecerTecnico` table. All the data in the column will be lost.
  - You are about to drop the `infoComplementar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "infoComplementar" DROP CONSTRAINT "infoComplementar_cargoId_fkey";

-- AlterTable
ALTER TABLE "parecerTecnico" DROP COLUMN "riscos",
ADD COLUMN     "recomendacao" TEXT,
ADD COLUMN     "risco" TEXT;

-- DropTable
DROP TABLE "infoComplementar";
