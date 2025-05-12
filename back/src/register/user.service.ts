import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';  
import { UsuarioDto } from './user-dto'; 
import axios from 'axios';
import * as bcrypt from 'bcrypt'; 

interface ViaCepResponse {
  logradouro: string;
  bairro: string;
  erro?: boolean;
}

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async buscarEnderecoPorCep(cep: string) {
    try {
      const response = await axios.get<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        throw new BadRequestException('CEP inválido');
      }
      return {
        rua: response.data.logradouro || 'Rua não encontrada',
        bairro: response.data.bairro || 'Bairro não encontrado',
      };
    } catch (error) {
      throw new BadRequestException('Erro ao buscar endereço');
    }
  }

  async criarUsuario(data: UsuarioDto) {
    try {
      const { rua, bairro } = await this.buscarEnderecoPorCep(data.cep);

     
      const hashedPassword = await bcrypt.hash(data.senha, 10);

      return await this.prisma.usuario.create({
        data: {
          nome: data.nome,
          sobrenome: data.sobrenome,
          email: data.email,
          senha: hashedPassword, 
          telefone: data.telefone,
          cep: data.cep,
          numero: data.numero,
          rua,
          bairro,
          isAdmin: data.isAdmin ?? false,
        },
      });
    } catch (error) {
      throw new BadRequestException('Erro ao criar usuário. Verifique os dados informados.');
    }
  }
}
