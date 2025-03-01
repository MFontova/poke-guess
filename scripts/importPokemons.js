// import obtenerDatosPokemons from '../lib/importPokemons.js';
import obtenerDatosPokemons from '../src/lib/importPokemons.js';

const inicio = parseInt(process.argv[2], 10) || 1;
const fin = parseInt(process.argv[3], 10) || 50;

obtenerDatosPokemons(inicio, fin)
  .then(() => {
    console.log('Importación completada');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error en la importación:', error);
    process.exit(1);
  });