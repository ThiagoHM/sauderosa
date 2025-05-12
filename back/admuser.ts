import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const senhaPlana = 'admin123'; 
  const senhaHasheada = await bcrypt.hash(senhaPlana, 10);

  const adminExiste = await prisma.usuario.findUnique({
    where: { email: 'admin@admin.com' },
  });

  if (!adminExiste) {
    await prisma.usuario.create({
      data: {
        nome: 'Medico',
        sobrenome: 'Master',
        email: 'admin@gmail.com',
        senha: senhaHasheada,
        telefone: '00000000000',
        cep: '00000000',
        rua: 'Rua do Admin',
        bairro: 'Bairro Central',
        numero: '1',
        isAdmin: true,
      },
    });
    console.log('Usuário admin criado com sucesso.');
  } else {
    console.log('Usuário admin já existe.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
