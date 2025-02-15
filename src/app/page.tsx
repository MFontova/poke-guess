import { ClientWrapper } from "@/components/ClientWrapper";
import { DropdownInput } from "@/components/DropdownInput";
import { TriedPokemons } from "@/components/TriedPokemons";
import { TriesCounter } from "@/components/TriesCounter";
import pokemonData from "@/data/pokemon_data.json";
import { Pokemon } from "@/types/pokemon";

export default function Home() {
  const pokemonList: Pokemon[] = pokemonData as Pokemon[]
  const selectedPokemon = pokemonList[Math.floor(Math.random() * 150) + 1]
  
  return (
    <div className="flex flex-col gap-5 px-5 py-10 items-center border-4 rounded-tl-xl rounded-br-xl max-w-xl m-auto">
      <ClientWrapper selectedPokemon={selectedPokemon} />
      <TriesCounter/>
      <DropdownInput showImages />
      <TriedPokemons />
    </div>
  );
}
