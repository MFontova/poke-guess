"use server"

import { PrismaClient } from "@prisma/client";

export default async function getPokemons({generations}: {generations: number[]}) {
  const prisma = new PrismaClient()

  const pokemons = await prisma.pokemon.findMany({
    where: {
      generation: {
        in: generations
      }
    }
  })

  return pokemons
}