import { Pokemon } from './tipos';

export const pokedex: Pokemon[] = [
    { id: 1, nombre: 'Bulbasaur', tipo: 'Planta', rareza: 'Común', region: 'Kanto', etapa: 'Básica', habilidades: [{ nombre: 'Látigo Cepa', danoBase: 45 }] },
    { id: 4, nombre: 'Charmander', tipo: 'Fuego', rareza: 'Común', region: 'Kanto', etapa: 'Básica', habilidades: [{ nombre: 'Ascuas', danoBase: 40 }] },
    { id: 130, nombre: 'Gyarados', tipo: 'Agua', rareza: 'Raro', region: 'Kanto', etapa: 'Fase 1', habilidades: [{ nombre: 'Hidrobomba', danoBase: 110 }] },
    { id: 94, nombre: 'Gengar', tipo: 'Fantasma', rareza: 'Raro', region: 'Kanto', etapa: 'Fase 2', habilidades: [{ nombre: 'Bola Sombra', danoBase: 80 }] },
    { id: 257, nombre: 'Blaziken', tipo: 'Fuego', rareza: 'Raro', region: 'Hoenn', etapa: 'Fase 2', habilidades: [{ nombre: 'Patada Ígnea', danoBase: 85 }] },
    { id: 384, nombre: 'Rayquaza', tipo: 'Dragón', rareza: 'Legendario', region: 'Hoenn', etapa: 'Básica', habilidades: [{ nombre: 'Enfado', danoBase: 120 }] }
];