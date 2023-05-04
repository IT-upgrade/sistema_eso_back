-- CreateEnum
CREATE TYPE "DocRole" AS ENUM ('cpf', 'cnpj', 'caepf', 'cno', 'cei');

-- CreateTable
CREATE TABLE "pessoas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_doc" "DocRole" NOT NULL DEFAULT 'cpf',
    "numero_doc" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "rg_emissor" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_sec" TEXT,
    "tel" TEXT NOT NULL,
    "tel_sec" TEXT,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "cargoId" TEXT NOT NULL,
    "empresaId" TEXT NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT,
    "cbo" TEXT,
    "aptidao" TEXT,
    "ambiente" TEXT,
    "informacao" TEXT,
    "atividade" TEXT,
    "carga_horaria" TEXT,
    "empresaId" TEXT NOT NULL,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" TEXT NOT NULL,
    "rasao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "tipo_doc" "DocRole" NOT NULL DEFAULT 'cnpj',
    "numero_doc" TEXT NOT NULL,
    "data_registro" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_sec" TEXT,
    "tel" TEXT NOT NULL,
    "tel_sec" TEXT,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "estabelecimento" TEXT,

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargos" ADD CONSTRAINT "cargos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
