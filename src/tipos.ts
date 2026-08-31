// Uniones literales para estados/categorías
export type TipoPokemon = 'Fuego' | 'Agua' | 'Planta' | 'Eléctrico' | 'Fantasma' | 'Dragón';
export type Rareza = 'Común' | 'Raro' | 'Legendario';
export type Region = 'Kanto' | 'Johto' | 'Hoenn';
export type EtapaEvolucion = 'Básica' | 'Fase 1' | 'Fase 2';

// Interfaces personalizadas
export interface Habilidad {
    nombre: string;
    danoBase: number;
}

export interface Pokemon {
    id: number;
    nombre: string;
    tipo: TipoPokemon;
    rareza: Rareza;
    region: Region;
    etapa: EtapaEvolucion;
    habilidades: Habilidad[];
}