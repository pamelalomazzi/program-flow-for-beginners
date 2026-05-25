/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A[start] --> B[end]
`;
A("Inicio") --> B["Hervir agua"]
    B["Hervir agua"] --> C["Preparar cafe"]
    C["Preparar cafe"] --> D["Servir"]
    D["Servir"] --> F("Fin")
module.exports = answer.trim();