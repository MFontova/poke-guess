"use client"

import pokemonData from "@/data/pokemon_data.json";
import { $search, $selectedPokemon, addTry } from "@/stores/pokemonStore";
import { Pokemon } from "@/types/pokemon";
import { useStore } from "@nanostores/react";
import JSConfetti from "js-confetti";
import Image from "next/image";
import { useEffect } from "react";
import { Input } from "./Input";

export const DropdownInput = ({showImages}: {showImages: boolean}) => {
  const search = useStore($search)
  const selectedPokemon = useStore($selectedPokemon)
  const pokemonList: Pokemon[] = pokemonData as []

  const filteredPokemon = pokemonList.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  
  useEffect(() => {
    const rand = Math.round(Math.random() * 151)
    $selectedPokemon.set(pokemonList.find(p => p.id == rand))
  }, [])

  return (
    <>
      <Input/>
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
            {showImages && <Image src={p.sprites.front_default} alt={p.name} width={50} height={50} />}
            <p>{p.name}</p>
          </div>
        ))
      }
    </>
  )
}