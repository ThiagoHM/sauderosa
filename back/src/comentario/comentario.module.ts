import { Module } from '@nestjs/common';
import { ComentarioController } from './comentario.controller';
import { ComentarioService } from './comentario.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [ComentarioController],
  providers: [ComentarioService, PrismaService],
})
export class ComentarioModule {}
