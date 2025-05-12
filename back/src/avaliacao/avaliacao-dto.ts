import {IsInt, IsNotEmpty, IsString} from 'class-validator';

export class AvaliacaoDto {
    @IsString()
    @IsNotEmpty()
    texto: string;

    @IsInt()
    @IsNotEmpty()
    nota: number;

    @IsString()
    @IsNotEmpty()   
    usuarioId: string;
}