import { IsEmail, IsNotEmpty, IsString, Length, IsBoolean, IsOptional } from 'class-validator';

export class UsuarioDto {

  @IsNotEmpty()
  @IsString()
      nome: string;
  
  @IsNotEmpty()
  @IsString()
  sobrenome: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  senha: string;
  
  @IsNotEmpty()
  @IsString()
  telefone: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  cep: string;
  
  @IsNotEmpty()
  @IsString()
  numero: string;

  @IsString()
  rua?: string;

  @IsString()
  bairro?: string;

  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;
  
  }