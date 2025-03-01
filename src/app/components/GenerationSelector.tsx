"use client"

import { $selectedGenerations, $selectedPokemon } from "@/stores/pokemonStore"
import { useStore } from "@nanostores/react"

export const GenerationSelector = () => {
  const selectedPokemon = useStore($selectedPokemon)
  console.log(selectedPokemon?.name)
  const generations: string[] = ["1","2","3","4","5","6","7","8","9"]
  const selectedGenerations = useStore($selectedGenerations)

  function onClickHandler(generation: string) {
    const numGen = Number(generation)
    const newSelectedGenerations = new Set(selectedGenerations)
    newSelectedGenerations.has(numGen)
      ? newSelectedGenerations.delete(numGen)
      : newSelectedGenerations.add(numGen);

    $selectedGenerations.set(newSelectedGenerations)
  }
  
  return (
    <>
      <p className="text-sm">Select generations:</p>
      <div className="flex gap-2 flex-wrap text-sm">
        {
          generations.map(g => (
            <button key={g} onClick={() => onClickHandler(g)} className={`border p-3 ${selectedGenerations.has(Number(g)) && 'border-emerald-500'}`}>{g}</button>
          ))
        }
      </div>
    </>
  )
}