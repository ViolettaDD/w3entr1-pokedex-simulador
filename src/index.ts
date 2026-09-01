import { explorarRegion, filtrarPorEvolucion, emitirDiagnostico } from './oraculo';
import { pokedex } from './pokemons';

const iniciarEscaneo = async () => {
    console.log("Iniciando escáner de ecosistemas Pokémon...\n");

    try {
        // Uso de async
        //Para el ejemplo, explora Hoenn y luego filtra todos los Pokemon en etapa básica
        console.log("Explorando la región de Hoenn...");
        const pokemonEncontrado = await explorarRegion('Hoenn');
        
        console.log("\n¡Señal detectada!");
        console.log(emitirDiagnostico(pokemonEncontrado));

        console.log("\n--- Análisis del Ecosistema ---");
        
        // Uso de funciones
        const pokemonsBasicos = filtrarPorEvolucion(pokedex, 'Básica');
        const nombresBasicos = pokemonsBasicos.map(p => p.nombre);
        
        console.log(`Especies en etapa Básica registradas:`, ...nombresBasicos);

    } catch (error) {
        // Errores
        if (error instanceof Error) {
            console.error("Error crítico en el sistema:", error.message);
        } else {
            console.error("Error desconocido.");
        }
    }
};

iniciarEscaneo();