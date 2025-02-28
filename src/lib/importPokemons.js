// lib/importPokemons.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function obtenerDatosPokemons(inicio, fin) {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  for (let id = inicio; id <= fin; id++) {
    try {
      const response = await fetch(`${baseUrl}${id}`);
      const data = await response.json();

      // Guardar en la base de datos usando Prisma
      await prisma.pokemon.upsert({
        data: {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          type1: data.types[0].type.name,
          type2: data.types[1] ? data.types[1].type.name : 'none',
          smallImageUrl: data.sprites.front_default,
          largeImageUrl: data.sprites.other['official-artwork'].front_default
        },
      });

      console.log(`Pokémon con ID ${id} agregado a la base de datos`);
    } catch (error) {
      console.error(`Error al obtener el Pokémon con ID ${id}:`, error);
    }
  }
}

export default obtenerDatosPokemons;
