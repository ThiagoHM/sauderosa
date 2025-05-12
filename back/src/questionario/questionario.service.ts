import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { QuestionarioDto } from './quesstionario-dto';

@Injectable()
export class QuestionarioService {
  constructor(private prisma: PrismaService) {}

  avaliarGravidade(q: QuestionarioDto): string {
    let score = 0;

    if (q.perda_forca === 'sim') score += 2; 
    if (q.dor >= 3) score += 2;
    if (q.flexao_extensao === 'nao') score += 1;
    if (q.abducao_aducao === 'nao') score += 1;
    if (q.rotacao === 'nao') score += 1;
    if (q.abducao_horizontal === 'nao') score += 1;
    if (q.recidiva === 'sim') score += 1;

    if (score >= 4) return 'Grave';
    if (score >= 2) return 'Moderado';
    return 'Leve';
  }

  async salvarQuestionario(q: QuestionarioDto) {
    const gravidade = this.avaliarGravidade(q);

    const usuarioId = String(q.usuarioId); 

    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { id: usuarioId },  
    });

    if (!usuarioExistente) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);  
    }

    try {
      const questionario = await this.prisma.questionario.create({
        data: {
          idade: q.idade,
          procedimento: q.procedimento,
          tempo_operacao: q.tempo_operacao,
          tipo_cancer: q.tipo_cancer,
          tratamento_fisio: q.tratamento_fisio,
          familia_cancer: q.familia_cancer,
          recidiva: q.recidiva,
          flexao_extensao: q.flexao_extensao,
          abducao_aducao: q.abducao_aducao,
          rotacao: q.rotacao,
          abducao_horizontal: q.abducao_horizontal,
          perda_forca: q.perda_forca,
          dor: q.dor,
          gravidade,
          usuarioId: usuarioId, 
        },
      });

      return { gravidade, questionario };  
    } catch (error) {
      throw new HttpException('Erro ao salvar questionário', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    return this.prisma.questionario.findMany();
  }

  async listarUsuariosPorGravidade() {
    const gravidadeOrder = { 'Grave': 0, 'Moderado': 1, 'Leve': 2 };

    const questionarios = await this.prisma.questionario.findMany({
      include: {
        usuario: true,  
      },
      orderBy: {
        gravidade: 'asc',  
      },
    });

    return questionarios.map((q) => ({
      nome: q.usuario?.nome,
      telefone: q.usuario?.telefone,
      gravidade: q.gravidade,
    }));
  }
}
