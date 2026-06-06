 // src/main.ts

import { buscarPokemon } from "./services/pokeApi";
import { Catalogo } from "./modules/catalogo";

async function main() {
  console.log("=== Pokédex TypeScript Lite ===");

  // Exemplo: buscar um Pokémon
  const pikachu = await buscarPokemon("pikachu");
  if (pikachu) {
    console.log(`[OK] Pokémon encontrado: ${pikachu.nome}`);
  } else {
    console.log("[ERRO] Pokémon não encontrado");
  }

  // Exemplo: usar catálogo
  const catalogo = new Catalogo();
  catalogo.adicionar(pikachu);
  catalogo.listar();
}

main();
