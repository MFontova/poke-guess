"use client"

import { $tries, maxTries } from "@/stores/pokemonStore"
import { useStore } from "@nanostores/react"

export const TriesCounter = () => {
  const tries = useStore($tries)
  return (
    <p className="self-end text-xs">Tries: {tries.length}/{maxTries}</p>
  )
}