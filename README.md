# Pokédex TypeScript Lite 
## Sobre o projeto 

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript 
que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um 
catálogo local durante a execução do programa. 
## Objetivo 

Praticar os principais conceitos do Módulo 01: - Node.js;
 - JavaScript no back-end; 
 - TypeScript; 
 - interfaces; 
 - funções tipadas; 
 - arrays;
 - objetos; 
 - JSON; 
 - métodos de array; 
 - classes; 
 - async/await; 
 - fetch;
 - tratamento de erros; 
 - GitHub; 
 - GitFlow; 
 - Kanban. 

## Tecnologias utilizadas - Node.js - TypeScript - TSX - PokeAPI - Git - GitHub 
## Pré-requisitos 

Antes de executar o projeto, é necessário ter instalado: - Node.js - npm - Git 

## Como instalar 

## Clone o repositório: 


git clone LINK_DO_REPOSITORIO 

Acesse a pasta do projeto: 
   cd pokedex-typescript-lite 
Instale as dependências: 
   npm install 
Como executar 
Execute o projeto em ambiente de desenvolvimento: 
   npm run dev 


## Estrutura do projeto 
pokedex-typescript-lite/ 
│ 
├── src/   
       ├── main.ts 
       ├── types.ts
       ├── pokeApi.ts 
       └── catalogo.ts 
├── package.json 
├── tsconfig.json 
└── README.md

## Funcionalidades
- Buscar Pokémon por nome ou ID 
- Tratar erro de Pokémon inexistente 
- Transformar resposta da API em objeto simplificado 
- Adicionar Pokémon ao catálogo local 
- Impedir Pokémon duplicado 
- Listar catálogo 
- Remover Pokémon por ID 
- Exibir mensagens no terminal 
- Exemplos de execução 
- Busca válida 

## Entrada testada:

 pokedex-typescript-lite@1.0.0 start
 ts-node src/main.ts

=== Pokédex TypeScript Lite ===
[OK] Pokémon pikachu adicionado ao catálogo
[OK] Pokémon bulbasaur adicionado ao catálogo
=== Catálogo de Pokémons ===
#25 - pikachu [electric]
#1 - bulbasaur [grass, poison]
[OK] Pokémon com ID 25 removido do catálogo
=== Catálogo de Pokémons ===
#1 - bulbasaur [grass, poison]

## Conceitos aplicados 

TypeScript  
Utilizamos interfaces (PokemonApiResponse, PokemonResumo) para definir a estrutura dos dados.
Os parâmetros e retornos das funções (buscarPokemon, adicionarPokemon) são tipados, garantindo segurança e clareza.

Interface PokemonResumo  
Criada para representar os dados simplificados do Pokémon (id, nome, tipos, altura, peso).
Isso facilita o uso no catálogo sem precisar lidar com toda a resposta da API.

Fetch e async/await  
A função buscarPokemon consulta a PokéAPI usando fetch.
O uso de async/await garante que a aplicação espere a resposta antes de prosseguir.

Tratamento de erros  
Caso o Pokémon não seja encontrado (response.ok === false), exibimos [ERRO] Pokémon não encontrado.
Também usamos try/catch para capturar falhas de rede ou exceções.

Métodos de array

map → para extrair os tipos do Pokémon.

filter → para remover Pokémon do catálogo.

forEach → para listar os Pokémons no console.

some → para evitar duplicidade ao adicionar.

Classe CatalogoPokemon  
Criamos a classe PokemonController (nosso catálogo), com:

Atributo: catalogo (array de PokemonResumo).

Métodos:

adicionarPokemon(nome)

listarPokemons()

removerPokemon(id)

Organização do Kanban 
Link do Kanban: 

https://github.com/users/Robcfdf/projects/4/views/1

Branches utilizadas - main - develop - feat/pokedex - docs/readme 

## Melhorias futuras 
- Criar menu interativo no terminal 
- Salvar catálogo em arquivo JSON 
- Exibir HP, ataque e defesa 
- Criar filtros por tipo de Pokémon 
- Criar uma API própria com Express
