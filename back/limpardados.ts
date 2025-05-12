import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function limparDados() {
  try {
    
    await prisma.resposta.deleteMany();
    await prisma.questionario.deleteMany(); 
    await prisma.comentario.deleteMany();
    await prisma.usuario.deleteMany();

    console.log("Dados apagados com sucesso.");
  } catch (error) {
    console.error("Erro ao apagar dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

limparDados();
