import { Module } from '@nestjs/common';
import { UsuarioService } from './user.service';
import { UsuarioController } from './user.controller';

@Module({
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}