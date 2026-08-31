# Pokedex: Escáner de Pokémon en Ecosistemas

## Intención Creativa
Una máquina que simula el escaneo de diferentes ecosistemas para encontrar y clasificar Pokémon. El Pokedex recibe parámetros, como la región o el tipo elemental buscado, y produce diagnósticos sobre las criaturas encontradas, clasificándolas por su etapa de evolución y rareza.

## Criterios y Comandos
1. El sistema debe procesar búsquedas asíncronas simulando el tiempo de escaneo en la hierba alta usando `Promises` y `async/await`.
2. Debe permitir categorizar y filtrar criaturas usando combinaciones de tipos literales estrictos (Región, Evolución, Tipo, Rareza).
3. El código debe usar funciones de orden superior y destructuring para emitir un diagnóstico claro sobre el Pokémon encontrado sin bloquear el Event Loop.