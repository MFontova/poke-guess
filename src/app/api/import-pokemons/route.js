import obtenerDatosPokemons from '@/lib/importPokemons';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get('start') || '1', 10);
  const end = parseInt(searchParams.get('end') || '50', 10);

  try {
    await obtenerDatosPokemons(start, end);
    return NextResponse.json({ message: `Pokémon del ${start} al ${end} importados correctamente` });
  } catch (error) {
    console.error('Error al importar Pokémon:', error);
    return NextResponse.json({ error: 'Error al importar Pokémon' }, { status: 500 });
  }
}
