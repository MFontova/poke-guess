import { ClientWrapper } from "./components/ClientWrapper";
import { DropdownInput } from "./components/DropdownInput";
import { GenerationSelector } from "./components/GenerationSelector";
import { TriedPokemons } from "./components/TriedPokemons";
import { TriesCounter } from "./components/TriesCounter";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 px-5 py-10 items-center border-4 rounded-tl-xl rounded-br-xl max-w-xl m-auto">
      <ClientWrapper/>
      <GenerationSelector/>
      <TriesCounter/>
      <DropdownInput showImages />
      <TriedPokemons />
    </div>
  );
}
