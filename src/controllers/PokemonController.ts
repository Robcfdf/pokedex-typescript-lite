// src/controllers/PokemonController.ts
import { buscarPokemon } from "../services/pokeApi";
import { PokemonResumo } from "../models/PokemonResumo";

export class PokemonController {
  private catalogo: PokemonResumo[] = [];

  async adicionarPokemon(nome: string): Promise<void> {
    const pokemon = await buscarPokemon(nome);
    if (pokemon) {
      this.catalogo.push(pokemon);
      console.log(`[OK] Pokémon ${pokemon.nome} adicionado ao catálogo`);
    }
  }

  listarPokemons(): void {
    console.log("=== Catálogo de Pokémons ===");
    this.catalogo.forEach(p => {
      console.log(`#${p.id} - ${p.nome} [${p.tipos.join(", ")}]`);
    });
  }

  removerPokemon(id: number): void {
    this.catalogo = this.catalogo.filter(p => p.id !== id);
    console.log(`[OK] Pokémon com ID ${id} removido do catálogo`);
  }
}
