import { IsInt, IsString, Min, Max, IsNotEmpty } from 'class-validator';

export class QuestionarioDto {
  @IsString()
  @IsNotEmpty()
  idade: string;  

  @IsString()
  @IsNotEmpty()
  procedimento: string;

  @IsString()
  @IsNotEmpty()
  tempo_operacao: string;

  @IsString()
  @IsNotEmpty()
  tipo_cancer: string;

  @IsString()
  @IsNotEmpty()
  tratamento_fisio: string;

  @IsString()
  @IsNotEmpty()
  familia_cancer: string;

  @IsString()
  @IsNotEmpty()
  recidiva: string;  

  @IsString()
  @IsNotEmpty()
  flexao_extensao: string;

  @IsString()
  @IsNotEmpty()
  abducao_aducao: string;

  @IsString()
  @IsNotEmpty()
  rotacao: string;

  @IsString()
  @IsNotEmpty()
  abducao_horizontal: string;

  @IsString()
  @IsNotEmpty()
  perda_forca: string;  

  @IsInt()
  @Min(0)
  @Max(5)
  dor: number;

  @IsString()
  usuarioId: string;
}
