import { ClientWrapper } from "@/components/ClientWrapper";
import { DropdownInput } from "@/components/DropdownInput";
import { TriedPokemons } from "@/components/TriedPokemons";
import { TriesCounter } from "@/components/TriesCounter";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient()

export default async function Home() {
  const pokemons = await prisma.pokemon.findMany({
    orderBy: {id: 'asc'}
  })
  return (
    // <div className="flex flex-col gap-5 px-5 py-10 items-center border-4 rounded-tl-xl rounded-br-xl max-w-xl m-auto">
    //   <ClientWrapper />
    //   <TriesCounter/>
    //   <DropdownInput showImages />
    //   <TriedPokemons />
    // </div>
    <div>
      {
        pokemons.map(p => (
          <div key={p.id}>
            <Image src={p.largeImageUrl} alt={p.name} width={100} height={100} />
            <p>{p.name}</p>
          </div>
        ))
      }
    </div>
  );
}
