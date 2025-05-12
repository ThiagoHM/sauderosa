import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './register/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma.module';
import { ComentarioModule } from './comentario/comentario.module';
import { QuestionarioModule } from './questionario/questionario.smodule';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    ComentarioModule,
    QuestionarioModule,
    PrismaModule,
    AvaliacaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
