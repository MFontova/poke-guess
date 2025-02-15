"use client"

import { $selectedPokemon } from "@/stores/pokemonStore";
import { Pokemon } from "@/types/pokemon";
import { useEffect } from "react";

export const ClientWrapper = ({selectedPokemon}: {selectedPokemon: Pokemon}) => {
  useEffect(() => {
    $selectedPokemon.set(selectedPokemon)
  }, [selectedPokemon])

  return null
}