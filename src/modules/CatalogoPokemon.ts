// src/modules/CatalogoPokemon.ts
import { PokemonResumo } from "../models/PokemonResumo";

export class CatalogoPokemon {
  private lista: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo) {
    if (this.lista.find(p => p.id === pokemon.id)) {
      console.log("[ERRO] Pokémon já existe no catálogo!");
      return;
    }
    this.lista.push(pokemon);
    console.log(`[OK] Pokémon ${pokemon.nome} adicionado!`);
  }

  listar() {
    console.log("=== Catálogo de Pokémon ===");
    this.lista.forEach(p => console.log(`${p.id} - ${p.nome} (${p.tipos.join(", ")})`));
  }

  remover(id: number) {
    this.lista = this.lista.filter(p => p.id !== id);
    console.log(`[OK] Pokémon com ID ${id} removido`);
  }
}
