"use client"

import { $selectedPokemon, $tries } from "@/stores/pokemonStore";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { Stat } from "./Stat";

export const TriedPokemons = () => {
  const tries = useStore($tries)
  const selectedPokemon = useStore($selectedPokemon)
  const reversedTries = [...tries].reverse()
  
  return (
    <section className="flex items-start gap-8 overflow-y-auto max-w-full">
      {
        reversedTries.map((pokemon) => (
          <div key={pokemon.id} className="flex flex-col gap-3 items-center">
            <Image src={pokemon.smallImageUrl} alt={pokemon.name} width={75} height={75} />
            <p className="text-[10px]">{pokemon.name}</p>
            <Stat compareValue={selectedPokemon!.type1} title="Tipo 1" value={pokemon.type1} />
            <Stat compareValue={selectedPokemon!.type2!} title="Tipo 2" value={pokemon.type2!} />
            <Stat compareValue={selectedPokemon!.height} title="Altura" value={pokemon.height} />
            <Stat compareValue={selectedPokemon!.weight} title="Peso" value={pokemon.weight} />
          </div>
        ))
      }
    </section>
  )
}