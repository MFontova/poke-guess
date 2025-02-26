"use client"

import pokeball from "@/images/pokeball.png"
import { $lost, $search } from "@/stores/pokemonStore"
import { useStore } from "@nanostores/react"
import Image from "next/image"

export const Input = () => {
  const search = useStore($search)
  const lost = useStore($lost)

  return (
    <div className="flex gap-3 border-2 p-3 rounded-tl-xl rounded-br-xl w-full focus:outline-none">
      <Image src={pokeball} alt="pokeball" width={25} height={25} />
      <input 
        type="text" 
        placeholder="Gengar, Mew..." 
        value={search} 
        onChange={(e) => $search.set(e.target.value)} 
        className="text-xs w-full"
        disabled={lost}
      />
    </div>
  )
}