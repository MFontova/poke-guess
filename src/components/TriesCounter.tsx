"use client"

import { $tries } from "@/stores/pokemonStore"
import { useStore } from "@nanostores/react"

export const TriesCounter = () => {
  const tries = useStore($tries)
  return (
    <p className="self-end text-xs">Tries: {tries.length}</p>
  )
}