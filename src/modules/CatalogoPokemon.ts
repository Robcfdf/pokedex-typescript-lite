import { PokemonResumo } from "../models/PokemonResumo";

export class CatalogoPokemon {
  private lista: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo) {
    this.lista.push(pokemon);
  }

  listar() {
    return this.lista;
  }

  remover(id: number) {
    this.lista = this.lista.filter(p => p.id !== id);
  }
}
