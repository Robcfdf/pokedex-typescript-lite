// src/services/pokeApi.ts
import { PokemonApiResponse } from "../models/PokemonApiResponse";
import { PokemonResumo } from "../models/PokemonResumo";

export async function buscarPokemon(nome: string): Promise<PokemonResumo | null> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`);
    if (!response.ok) {
      console.log("[ERRO] Pokémon não encontrado");
      return null;
    }

    const data: PokemonApiResponse = await response.json();

    // Mapeando para PokemonResumo
    const resumo: PokemonResumo = {
      id: data.id,
      nome: data.name,
      tipos: data.types.map(t => t.type.name)
    };

    return resumo;
  } catch (error) {
    console.error("[ERRO] Falha ao buscar Pokémon:", error);
    return null;
  }
}
