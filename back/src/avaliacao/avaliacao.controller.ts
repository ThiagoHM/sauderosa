import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { AvaliacaoService } from "./avaliacao.service";
import { AvaliacaoDto } from "./avaliacao-dto";

@Controller("avaliacao")
export class AvaliacaoController {
    constructor(private readonly avaliacaoService: AvaliacaoService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: AvaliacaoDto) {
        return this.avaliacaoService.salvarAvaliacao(data);
    }
}