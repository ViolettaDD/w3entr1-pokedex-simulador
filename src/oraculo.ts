import { Pokemon, Region, EtapaEvolucion } from './tipos';
import { pokedex } from './pokemons';


export const explorarRegion = (regionBuscada: Region): Promise<Pokemon> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pokemonsRegion = pokedex.filter(p => p.region === regionBuscada);
            if (pokemonsRegion.length === 0) {
                reject(new Error(`El escáner falló: No hay registros en la región ${regionBuscada}`));
            } else {
                // Selecciona un Pokémon aleatorio de la región especifica
                const indiceAleatorio = Math.floor(Math.random() * pokemonsRegion.length);
                resolve(pokemonsRegion[indiceAleatorio]);
            }
        }, 1500); // 1.5 segundos simulados
    });
};


export const filtrarPorEvolucion = (pokemons: Pokemon[], etapaBuscada: EtapaEvolucion): Pokemon[] => {
    return pokemons.filter(pokemon => pokemon.etapa === etapaBuscada);
};


export const emitirDiagnostico = (pokemon: Pokemon): string => {
    const { nombre, tipo, rareza, etapa, habilidades } = pokemon;
    const ataquePrincipal = habilidades[0]?.nombre || 'Placaje';
    return `[DIAGNÓSTICO]: ${nombre} (${etapa}). Tipo ${tipo} de rareza ${rareza}. Habilidad destacada: ${ataquePrincipal}.`;
};