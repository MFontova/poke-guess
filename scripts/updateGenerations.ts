import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateGenerations() {
  const allPokemon = await prisma.pokemon.findMany(); // Obtiene todos los Pokémon

  const updatedPokemon = allPokemon.map((pokemon) => {
    let generation = 9; // Por defecto, asignamos la última gen

    if (pokemon.id <= 151) generation = 1;
    else if (pokemon.id <= 251) generation = 2;
    else if (pokemon.id <= 386) generation = 3;
    else if (pokemon.id <= 493) generation = 4;
    else if (pokemon.id <= 649) generation = 5;
    else if (pokemon.id <= 721) generation = 6;
    else if (pokemon.id <= 809) generation = 7;
    else if (pokemon.id <= 905) generation = 8;

    return prisma.pokemon.update({
      where: { id: pokemon.id },
      data: { generation },
    });
  });

  await Promise.all(updatedPokemon);
  console.log("Generaciones actualizadas correctamente.");

  await prisma.$disconnect();
}

updateGenerations().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
