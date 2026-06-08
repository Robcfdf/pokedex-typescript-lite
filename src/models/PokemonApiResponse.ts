// src/models/PokemonApiResponse.ts
export interface PokemonApiResponse {
  id: number;
  name: string;
  types: { type: { name: string } }[];
}
