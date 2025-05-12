import {
    CanActivate,
    ExecutionContext,
    Injectable,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from './roles.decorator'; 
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles || requiredRoles.length === 0) return true;
  
      const { user } = context.switchToHttp().getRequest();
      if (!user) throw new ForbiddenException('Usuário não autenticado.');
  
      const hasRole = requiredRoles.some(role => {
        if (role === 'admin') return user.isAdmin;
        return false; 
      });
  
      if (!hasRole) {
        throw new ForbiddenException('Você não tem permissão para acessar esta rota.');
      }
  
      return true;
    }
  }
  