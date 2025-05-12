import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { AvaliacaoDto } from "./avaliacao-dto";

@Injectable()
export class AvaliacaoService {
    constructor(private prisma: PrismaService) {}

    async salvarAvaliacao(a: AvaliacaoDto) {
        const usuarioId = String(a.usuarioId);
        const usuarioExistente = await this.prisma.usuario.findUnique({
              where: { id: usuarioId },  
            });
        
            if (!usuarioExistente) {
              throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);  
            }

         const avaliacao = await this.prisma.avaliacao.create({
            data: {
                texto: a.texto,
                nota: a.nota,
                usuarioId: usuarioId, 
            }
         });
         
         return avaliacao;
    }
}