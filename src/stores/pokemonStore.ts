import { Pokemon } from "@prisma/client";
import { atom, computed, map } from "nanostores";

export const $pokemons = atom<Pokemon[]>([])

export const $limits = map({
  from: 1,
  to: 151
})

export const $selectedGenerations = atom<Set<number>>(new Set())

export const $search = atom("")

export const $selectedPokemon = atom<Pokemon | undefined>(undefined)

export const $tries = atom<Pokemon[]>([])

export const maxTries = 5

export const $lost = computed([$tries, $selectedPokemon], (tries, selectedPokemon) => {
  if(selectedPokemon !== undefined && tries[tries.length - 1] == selectedPokemon) {
    return true
  }
  return tries.length == maxTries
})

export const $scale = atom<number>(3)

export function addTry(pokemon: Pokemon) {
  if(!$tries.get().some(p => p.id === pokemon.id)) {
    $tries.set([...$tries.get(), pokemon])
  }
}