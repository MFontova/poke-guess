"use client"

import { $lost, $pokemons, $search, $selectedPokemon, addTry } from "@/stores/pokemonStore";
import { useStore } from "@nanostores/react";
import JSConfetti from "js-confetti";
import Image from "next/image";
import { useEffect } from "react";
import { Input } from "./Input";
import { TryAgain } from "./TryAgain";

export const DropdownInput = ({showImages}: {showImages: boolean}) => {
  const search = useStore($search)
  const selectedPokemon = useStore($selectedPokemon)
  const lost = useStore($lost)
  const pokemons = useStore($pokemons)

  const filteredPokemon = pokemons.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  
  useEffect(() => {
    const rand = Math.round(Math.random() * 151)
    $selectedPokemon.set(pokemons.find(p => p.id == rand))
  }, [])

  return (
    <>
      {
        lost
          ? <TryAgain/>
          : <Input/>
      }
      {
        (filteredPokemon.length > 0 && search) && filteredPokemon.map(p => (
          <div className="flex gap-5 items-center w-full" key={p.id} 
            onClick={() => {
              addTry(p);
              $search.set("")
              if(p.id === selectedPokemon!.id) {
                const jsConfetti = new JSConfetti()
                jsConfetti.addConfetti()
              }
            }}
            >
            {showImages && <Image src={p.smallImageUrl} alt={p.name} width={50} height={50} />}
            <p>{p.name}</p>
          </div>
        ))
      }
    </>
  )
}