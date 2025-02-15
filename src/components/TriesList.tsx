"use client"

import { $selectedPokemon, $tries } from "@/stores/pokemonStore"
import { useStore } from "@nanostores/react"

export const TriesList = () => {
  const tries = useStore($tries)
  const selectedPokemon = useStore($selectedPokemon)
  return tries.length > 0 && (
    <ul>
      {
        [...tries].reverse().map(t => <li className={t.id === selectedPokemon?.id ? 'text-emerald-500' : 'line-through'} key={t.id}>{t.name}</li>)
      }
    </ul>
  )
}