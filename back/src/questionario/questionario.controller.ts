import { Body, Controller, Post, Get } from '@nestjs/common';
import { QuestionarioDto } from './quesstionario-dto';
import { QuestionarioService } from './questionario.service';

@Controller('questionario')
export class QuestionarioController {
  constructor(private readonly questionarioService: QuestionarioService) {}

  @Post()
  async salvar(@Body() questionarioDto: QuestionarioDto) {
    return await this.questionarioService.salvarQuestionario(questionarioDto);
  }

  @Get()
  async getQuestionario() {
    return await this.questionarioService.findAll();
  }

  @Get('usuarios-por-gravidade')
  async listarUsuariosPorGravidade() {
    return await this.questionarioService.listarUsuariosPorGravidade();
  }
}
