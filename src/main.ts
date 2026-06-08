// src/main.ts
import { PokemonController } from "./controllers/PokemonController";

async function main() {
  console.log("=== Pokédex TypeScript Lite ===");

  const controller = new PokemonController();

  await controller.adicionarPokemon("pikachu");
  await controller.adicionarPokemon("bulbasaur");

  controller.listarPokemons();

  controller.removerPokemon(25);

  controller.listarPokemons();
}

main();
