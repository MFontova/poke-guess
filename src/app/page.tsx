"use client"

import { TriedPokemons } from "@/components/TriedPokemons";
import pokemonData from "@/data/pokemon_data.json";
import { $search, $selectedPokemon, addTry } from "@/stores/pokemonStore";
import { Pokemon } from "@/types/pokemon";
import { useStore } from "@nanostores/react";
import Image from "next/image";
import { useEffect } from "react";
import pokeball from "@/images/pokeball.jpg"
import JSConfetti from "js-confetti"

export default function Home() {
  const search = useStore($search)
  const selectedPokemon = useStore($selectedPokemon)
  
  const pokemonList: Pokemon[] = pokemonData as []

  const filteredPokemon = pokemonList.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    $selectedPokemon.set(pokemonList.find(p => p.id == Math.round(Math.random() * 151)))
  }, [])
  
  return (
    <div className="flex flex-col gap-5 px-5 py-10 items-center border-4 rounded-tl-xl rounded-br-xl max-w-xl m-auto">
      <div className="flex gap-3 border-2 p-3 rounded-tl-xl rounded-br-xl w-full focus:outline-none">
        <Image src={pokeball} alt="pokeball" width={25} height={25} />
        <input 
          type="text" 
          placeholder="Gengar, Mew..." 
          value={search} 
          onChange={(e) => $search.set(e.target.value)} 
          className="text-xs w-full"
        />
      </div>

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
            <Image src={p.sprites.front_default} alt={p.name} width={50} height={50} />
            <p>{p.name}</p>
          </div>
        ))
      }
      <TriedPokemons />
    </div>
  );
}
