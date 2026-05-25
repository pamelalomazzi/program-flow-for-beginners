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
A("Inicio") --> B["Ingresar edad y licencia"]
    B["Ingresar edad y licencia"] --> C{"¿Edad >=21?"}
    C{"¿Edad >=21?"} -->|Si| D{"¿Licencia valida?"}
    D{"¿Licencia valida?"} -->|Si| E["Valido para alqular"]
    C{"¿Edad >=21?"} -->|No| F["Casa"]
    D{"¿Licencia valida?"} -->|No| F["Casa"]
    F["Casa"] --> G("Fin")
    E["Valido para alqular"] --> G("Fin")
module.exports = answer.trim();