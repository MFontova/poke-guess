"use client"

import { $selectedPokemon, $tries } from "@/stores/pokemonStore";
import { Pokemon } from "@/types/pokemon";
import { useEffect } from "react";
import pokemonData1 from "@/data/pokemon_data_1.json"

export const ClientWrapper = () => {
  const pokemonList: Pokemon[] = pokemonData1 as Pokemon[]
  const selectedPokemon = pokemonList[Math.floor(Math.random() * 150) + 1]
  useEffect(() => {
    $selectedPokemon.set(selectedPokemon)
    $tries.set([])
  }, [])

  return null
}