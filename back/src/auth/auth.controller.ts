import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auto.guard';  
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; senha: string }) {
   
    return this.authService.login(body.email, body.senha);
  }

  @UseGuards(JwtAuthGuard)
  @Get('verificar-token')
  async verificarToken(@Req() req) {
    
    return {
      user: {
        id: req.user.userId,  
        email: req.user.email,
        nome: req.user.nome,
        isAdmin: req.user.isAdmin
      }
    };
  }
}
