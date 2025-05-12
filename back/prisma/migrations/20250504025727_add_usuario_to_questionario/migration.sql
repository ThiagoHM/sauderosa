-- AlterTable
ALTER TABLE "Questionario" ADD COLUMN     "usuarioId" TEXT;

-- AddForeignKey
ALTER TABLE "Questionario" ADD CONSTRAINT "Questionario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
