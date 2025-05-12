import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './user.service';
import { UsuarioDto } from './user-dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: UsuarioDto) {
    return this.usuarioService.criarUsuario(data);
  }
}
