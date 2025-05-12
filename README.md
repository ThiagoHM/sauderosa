# Projeto Saúde Rosa com NestJS & Prisma

Este é um projeto feito com o intuito de aprender e explorar algumas funcionalidades, desenvolvido com **NestJS** e **Prisma ORM**. Ele permite funcionalidades como cadastro e autenticação de usuários, responder um formulário e ter acesso aos locais mais próximos da sua casa com hospitais especializados em câncer de mama. Além disso, os usuários podem deixar **avaliações**, visualizar **gráficos com base nas respostas** dos questionários, e participar de um **fórum** onde é possível comentar e responder comentários de outros usuários.

Usuários administradores (médicos) têm acesso a uma lista de pessoas com base nos dados do formulário, priorizando os casos mais graves.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/) para autenticação
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Autenticação

A autenticação é feita com **JWT**. Ao realizar login, um token é gerado e deve ser enviado nas próximas requisições autenticadas no header:

```
Authorization: Bearer SEU_TOKEN
```

## Funcionalidades

- Cadastro e login de usuários
- Preenchimento de formulário para análise médica
- Visualização de hospitais próximos especializados em câncer de mama
- Sistema de avaliações com estrelas e comentários
- Visualização de gráficos estatísticos com base nas respostas dos usuários
- Fórum com comentários e respostas entre usuários
- Identificação de casos graves para visualização exclusiva de médicos (admin)
- Sistema de autenticação com controle de acesso (usuário/admin)


Este projeto foi desenvolvido como parte de um trabalho acadêmico, com o objetivo de aprofundar o conhecimento prático em NestJS e Prisma, por meio da construção de um sistema completo que abrange autenticação de usuários, análise de dados e funcionalidades de interação entre usuários.
