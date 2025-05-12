-- CreateTable
CREATE TABLE "Questionario" (
    "id" SERIAL NOT NULL,
    "idade" TEXT NOT NULL,
    "procedimento" TEXT NOT NULL,
    "tempo_operacao" TEXT NOT NULL,
    "tipo_cancer" TEXT NOT NULL,
    "tratamento_fisio" TEXT NOT NULL,
    "familia_cancer" TEXT NOT NULL,
    "recidiva" TEXT NOT NULL,
    "flexao_extensao" TEXT NOT NULL,
    "abducao_aducao" TEXT NOT NULL,
    "rotacao" TEXT NOT NULL,
    "abducao_horizontal" TEXT NOT NULL,
    "perda_forca" TEXT NOT NULL,
    "dor" INTEGER NOT NULL,
    "gravidade" TEXT NOT NULL DEFAULT 'Leve',

    CONSTRAINT "Questionario_pkey" PRIMARY KEY ("id")
);
