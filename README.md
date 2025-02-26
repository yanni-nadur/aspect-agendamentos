# Aspect - Gerenciamento de Agendamentos de Exames Hospitalares

Este é um desafio técnico que visa criar uma aplicação web para gerenciamento de agendamentos de exames hospitalares. O objetivo é permitir que os usuários visualizem exames disponíveis, adicionem novos agendamentos e excluam agendamentos existentes.

## Funcionalidades

### 1. Gerenciamento de Exames
- **Visualizar Exames Disponíveis**: Exibe todos os tipos de exames disponíveis para agendamento.
  - Detalhes de cada exame:
    - Nome do Exame
    - Especialidade médica

### 2. Agendamento de Exames
- **Adicionar Agendamento**: Permite que os usuários agendem um exame selecionando:
  - Tipo de exame
  - Data e hora disponíveis
  - Informações adicionais (observações)
- **Visualizar Agendamentos**: Exibe todos os exames agendados.
  - Detalhes de cada agendamento:
    - Tipo de exame
    - Data e hora agendada
    - Informações adicionais
- **Excluir Agendamento**: Permite que os usuários removam um agendamento existente.

## Tecnologias Utilizadas

### Frontend
- **React.js** com **TypeScript**
- Gerenciamento de estado (Context API)
- Consumo de APIs RESTful

### Backend
- **Node.js** com **TypeScript**
- **Express.js** como framework

### Banco de Dados
- **PostgreSQL**
- **TypeORM** como ORM

### Hospedagem
- **Frontend**: Hospedado no [Vercel](https://vercel.com/)
- **Backend**: Hospedado no [Render](https://render.com/)

## Link para o Repositório

- [Repositório no GitHub](https://github.com/yanni-nadur/aspect-agendamentos)
