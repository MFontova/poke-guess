import { Pokemon } from "@/types/pokemon";
import { atom } from "nanostores";

export const $search = atom("")

export const $selectedPokemon = atom<Pokemon | undefined>(undefined)

export const $tries = atom<Pokemon[]>([])

export const $scale = atom<number>(3)

export function addTry(pokemon: Pokemon) {
  if(!$tries.get().some(p => p.id === pokemon.id)) {
    $tries.set([...$tries.get(), pokemon])
  }
}