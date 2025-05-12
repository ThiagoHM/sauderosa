import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRespostaDto {
  @IsNotEmpty()
  @IsString()
  texto: string;
}
