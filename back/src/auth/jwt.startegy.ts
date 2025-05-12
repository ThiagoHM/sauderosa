import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret', 
    });
  }

  async validate(payload: { sub: number; email: string; isAdmin: boolean; nome: string }) {
    
    return {
      userId: payload.sub,  
      email: payload.email,
      nome: payload.nome,
      isAdmin: payload.isAdmin,
    };
  }
}
