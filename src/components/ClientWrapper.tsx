"use client"

import { $selectedPokemon, $tries } from "@/stores/pokemonStore";
import { Pokemon } from "@/types/pokemon";
import { useEffect } from "react";
import pokemonData from "@/data/pokemon_data.json"

export const ClientWrapper = () => {
  const pokemonList: Pokemon[] = pokemonData as Pokemon[]
  const selectedPokemon = pokemonList[Math.floor(Math.random() * 150) + 1]
  useEffect(() => {
    $selectedPokemon.set(selectedPokemon)
    $tries.set([])
  }, [])

  return null
}