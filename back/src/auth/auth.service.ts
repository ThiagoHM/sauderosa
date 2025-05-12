import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async validateUser(email: string, senha: string) {
    try {
      const user = await this.prisma.usuario.findUnique({ 
        where: { email },
        select: {
          id: true,
          email: true,
          senha: true,
          isAdmin: true,
          nome: true,
          
        }
      });

      if (!user) {
        this.logger.warn(`Tentativa de login com email não cadastrado: ${email}`);
        throw new UnauthorizedException('Credenciais inválidas');
      }

      const isPasswordValid = await bcrypt.compare(senha, user.senha);
      
      if (!isPasswordValid) {
        this.logger.warn(`Tentativa de login com senha incorreta para o email: ${email}`);
        throw new UnauthorizedException('Credenciais inválidas');
      }

      
      const { senha: _, ...userWithoutPassword } = user;
      return userWithoutPassword;

    } catch (error) {
      this.logger.error(`Erro durante validação do usuário: ${error.message}`);
      throw error;
    }
  }

  async login(email: string, senha: string) {
    try {
      const user = await this.validateUser(email, senha);
      
      const payload = {
        sub: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
        nome: user.nome,
        
      };

      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          email: user.email,
          nome: user.nome,
          isAdmin: user.isAdmin
        }
      };
    } catch (error) {
      this.logger.error(`Falha no login para ${email}: ${error.message}`);
      throw new UnauthorizedException('Falha na autenticação');
    }
  }
}