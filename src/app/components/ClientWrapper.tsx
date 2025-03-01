"use client"

import { $pokemons, $selectedGenerations, $selectedPokemon, $tries } from "@/stores/pokemonStore";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import getPokemons from "../actions/pokemons";

export const ClientWrapper = () => {
  const pokemons = useStore($pokemons)
  const selectedGenerations = useStore($selectedGenerations)
  async function fetchPokemons() {
    const data = await getPokemons({generations: [...selectedGenerations]})
    console.log('pokemons', data)
    $pokemons.set(data)
  }

  useEffect(() => {
    console.log('selected generations changed')
  }, [selectedGenerations])

  useEffect(() => {
    const selectedPokemon = pokemons[Math.floor(Math.random() * 150) + 1]
    $selectedPokemon.set(selectedPokemon)
    $tries.set([])  
  }, [pokemons])

  useEffect(() => {
    fetchPokemons()
  }, [selectedGenerations])

  return null
}