import { ClientWrapper } from "@/components/ClientWrapper";
import { DropdownInput } from "@/components/DropdownInput";
import { ScaleShadowImage } from "@/components/ScaleShadowImage";
import { TriesCounter } from "@/components/TriesCounter";
import { TriesList } from "@/components/TriesList";
import pokemonData from "@/data/pokemon_data.json";
import { Pokemon } from "@/types/pokemon";

export default function Shadow() {
  const pokemonList: Pokemon[] = pokemonData as Pokemon[]
  const selectedPokemon = pokemonList[Math.floor(Math.random() * 150) + 1]
  
  return (
    <div className="flex flex-col gap-5 px-5 py-10 items-center border-4 rounded-tl-xl rounded-br-xl max-w-xl m-auto">
      <TriesCounter/>
      <ScaleShadowImage/>
      <DropdownInput showImages={false} />
      <ClientWrapper selectedPokemon={selectedPokemon} />
      <TriesList/>
    </div>
  )
}