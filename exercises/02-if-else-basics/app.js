/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A[start] --> B[end]
`;
A("Inicio") --> B["Ingresar edad"]
    B["Ingresar edad"] --> C{"¿Edad >=18?"}
    C{"¿Edad >=18?"} -->|Si| D["Permitido beber alcohol"]
    C{"¿Edad >=18?"} -->|No| E["No permitido beber alcohol"]
    D["Permitido beber alcohol"] --> F("Fin")
    E["No permitido beber alcohol"] --> F("Fin")

// Do not modify this
module.exports = answer.trim();