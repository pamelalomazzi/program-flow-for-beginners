/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[start] --> B[end]
`;
A("Inicio") --> B["Entrada color del semafoto"]
    B["Entrada color del semafoto"] --> C{"¿Color?"}
    C{"¿Color?"} --> E["Reducir la velocidad"]
    C{"¿Color?"} --> F["Detenerse"]
    C{"¿Color?"} --> D["Avanzar"]
    D["Avanzar"] --> G["Casa"]
    F["Detenerse"] --> G["Casa"]
    E["Reducir la velocidad"] --> G["Casa"]
    G["Casa"] --> H("Fin")
module.exports = answer.trim();