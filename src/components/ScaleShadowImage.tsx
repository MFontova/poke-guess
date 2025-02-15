"use client"

import { $scale, $selectedPokemon, $tries } from "@/stores/pokemonStore"
import { useStore } from "@nanostores/react"
import Image from "next/image"
import { useEffect } from "react"

export const ScaleShadowImage = () => {
  const selectedPokemon = useStore($selectedPokemon)
  const tries = useStore($tries)
  const scaleValue = useStore($scale)

  useEffect(() => {
    if(tries.length > 0) {
      $scale.set(scaleValue - 0.5)
    }
    console.log('tries', tries)
  }, [tries])
  
  return selectedPokemon !== undefined && (
    <div className="bg-white max-w-72 max-h-72 overflow-hidden">
      {
        tries.length > 0 && selectedPokemon.id == tries[tries.length - 1].id 
        ? (
          <Image 
            // className={`grayscale brightness-0 left-0`} 
            // style={{transform: `scale(${scaleValue})`}}
            src={selectedPokemon.sprites.other?.["official-artwork"].front_default as string} 
            alt="Pokemon" 
            width={500} 
            height={500} 
          />
        )
        : (
          <Image 
            className={`grayscale brightness-0 left-0`} 
            style={{transform: `scale(${scaleValue})`}}
            src={selectedPokemon.sprites.other?.["official-artwork"].front_default as string} 
            alt="Pokemon" 
            width={500} 
            height={500} 
          />
        )
      }
    </div>
  )
}