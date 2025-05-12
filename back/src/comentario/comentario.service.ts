import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateComentarioDto } from './comentario-dto'; 
import { CreateRespostaDto } from './resposta-dto'; 

@Injectable()
export class ComentarioService {
  constructor(private prisma: PrismaService) {}

  async criarComentario(dto: CreateComentarioDto, usuarioId: string) {
    if (!usuarioId) {
      throw new BadRequestException('ID do usuário é obrigatório');
    }

    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: {
        id: true,
        nome: true
      }
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return this.prisma.comentario.create({
      data: {
        texto: dto.texto,
        usuarioId: usuario.id,
        autor: usuario.nome
      }
    });
  }

  async listarComentariosComRespostas() {
    return this.prisma.comentario.findMany({
      include: {
        respostas: {
          include: {
            usuario: true, 
          },
        },
        usuario: true, 
      },
      orderBy: {
        dataCriacao: 'desc',  
      },
    });
  }

  async getComentarioById(id: string) {
    const comentario = await this.prisma.comentario.findUnique({
      where: { id },
      include: {
        respostas: true,  
      },
    });

    if (!comentario) {
      throw new NotFoundException('Comentário não encontrado');
    }

    return comentario;
  }

  async criarResposta(
    comentarioId: string,
    dto: CreateRespostaDto,
    usuarioId: string,
  ) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const comentario = await this.prisma.comentario.findUnique({
      where: { id: comentarioId },
    });

    if (!comentario) {
      throw new NotFoundException('Comentário não encontrado');
    }

    return this.prisma.resposta.create({
      data: {
        texto: dto.texto,
        autor: usuario.nome, 
        comentarioId,
        usuarioId,
      },
    });
  }

  async listarRespostasPorComentario(comentarioId: string) {
    return this.prisma.resposta.findMany({
      where: { comentarioId },
      include: {
        usuario: true,  
      },
      orderBy: {
        dataCriacao: 'asc',  
      },
    });
  }
}
