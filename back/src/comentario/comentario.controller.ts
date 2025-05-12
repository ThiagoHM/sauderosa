import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  NotFoundException,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { CreateComentarioDto } from './comentario-dto';
import { CreateRespostaDto } from './resposta-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auto.guard';
import { Request as ExpressRequest } from 'express';

interface AuthenticatedRequest extends ExpressRequest {
  user: { userId: string };
}

@Controller('comentarios')
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async criarComentario(
    @Body() createComentarioDto: CreateComentarioDto,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.comentarioService.criarComentario(
      createComentarioDto,
      req.user.userId,
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async listarComentarios() {
    return this.comentarioService.listarComentariosComRespostas();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async obterComentario(@Param('id', ParseUUIDPipe) id: string) {
    const comentario = await this.comentarioService.getComentarioById(id);
    if (!comentario) {
      throw new NotFoundException('Comentário não encontrado');
    }
    return comentario;
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/respostas')
  @HttpCode(HttpStatus.CREATED)
  async adicionarResposta(
    @Param('id', ParseUUIDPipe) comentarioId: string,
    @Body() createRespostaDto: CreateRespostaDto,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.comentarioService.criarResposta(
      comentarioId,
      createRespostaDto,
      req.user.userId,
    );
  }

  @Get(':id/respostas')
  @HttpCode(HttpStatus.OK)
  async listarRespostas(@Param('id', ParseUUIDPipe) comentarioId: string) {
    return this.comentarioService.listarRespostasPorComentario(comentarioId);
  }
}
