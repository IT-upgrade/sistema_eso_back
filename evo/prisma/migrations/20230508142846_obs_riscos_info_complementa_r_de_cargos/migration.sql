-- CreateTable
CREATE TABLE "infoComplementar" (
    "id" TEXT NOT NULL,
    "recomendacaoSeguranca" TEXT NOT NULL,
    "ltcat" TEXT,
    "riscoErgonomico" TEXT,
    "cargoId" TEXT,

    CONSTRAINT "infoComplementar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parecerTecnico" (
    "id" TEXT NOT NULL,
    "periculosidade" TEXT NOT NULL,
    "ltcat" TEXT,
    "riscos" TEXT,
    "cargoId" TEXT,

    CONSTRAINT "parecerTecnico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "infoComplementar" ADD CONSTRAINT "infoComplementar_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parecerTecnico" ADD CONSTRAINT "parecerTecnico_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
