````md
# Prueba Loggro – Juego de Bloques de Palabras 

Pequeño juego construido en **Angular** donde el usuario escribe una palabra y el sistema valida si se puede formar usando una colección de bloques (cada bloque tiene 2 letras).  

Incluye:

- Lógica de validación separada en función pura y servicio.
- Componente standalone con **TailwindCSS** y animaciones.
- **Pruebas unitarias** para la lógica y para el componente (Jasmine + Karma).

---

##  Objetivo del ejercicio

Simular un reto técnico donde se debe:

1. Representar una colección de bloques, cada uno con 2 letras.
2. Verificar si una palabra puede formarse usando esos bloques:
   - Un bloque solo se puede usar **una vez**.
   - Cada letra de la palabra consume exactamente **un bloque**.
3. Mostrar visualmente:
   - La lista de bloques disponibles.
   - Un campo para escribir la palabra.
   - Un mensaje animado indicando **éxito** o **error**.

---

##  Lógica del problema

La lógica principal se basa en:

- Un arreglo de bloques, por ejemplo:

  ```ts
  export type Block = [string, string];

  export const BLOCKS: Block[] = [
    ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
    ['G', 'T'], ['R', 'E'], ['T', 'G'], ['Q', 'D'], ['F', 'S'],
    ['H', 'U'], ['V', 'I'], ['A', 'T'], ['O', 'B'], ['E', 'R'],
    ['F', 'S'], ['L', 'Y'], ['P', 'C'], ['Z', 'M'], ['J', 'W']
  ];
````

* Una función pura `canFormWord(blocks, word)` que:

  * Convierte la palabra a mayúsculas.
  * Valida que solo tenga letras `A–Z`.
  * Rechaza palabras con más letras que bloques disponibles.
  * Usa **backtracking** para probar combinaciones de bloques sin reutilizarlos.

---

##  Tecnologías utilizadas

* **Angular** (standalone components)
* **TypeScript**
* **TailwindCSS** (clases utilitarias y colores personalizados `#606060` y `#E75E1E`)
* **Jasmine + Karma** para pruebas unitarias

---

##  Estructura del proyecto

Solo la parte relevante al juego:

```text
src/
└─ app/
   ├─ blocks/
   │  ├─ blocks.model.ts          # Tipo Block y lista de bloques
   │  ├─ blocks.logic.ts          # Función pura canFormWord(...)
   │  ├─ blocks.service.ts        # Servicio Angular que envuelve la lógica
   │  ├─ blocks.component.ts      # Componente standalone del juego
   │  ├─ blocks.component.html    # Template + Tailwind
   │  ├─ blocks.component.css     # Animaciones (success / error)
   │  ├─ blocks.logic.spec.ts     # Tests de la función pura
   │  └─ blocks.component.spec.ts # Tests del componente
   ├─ app.component.ts            # Monta <app-blocks>
   └─ app.component.spec.ts       # Tests de AppComponent
```

---

##  Cómo ejecutar el proyecto

### 1. Clonar e instalar dependencias

```bash
git clone <https://github.com/SJmuelle/pruebaloggro.git>
cd <pruebaloggro>
npm install
```

### 2. Levantar la aplicación

```bash
ng serve
```

Luego abre en el navegador:

```text
http://localhost:4200/
```

---

##  Ejecutar pruebas unitarias

Para correr **todas** las pruebas:

```bash
ng test
```

También puedes ejecutarlas una sola vez (sin watch):

```bash
ng test --watch=false
```

Verás los tests de:

* `blocks.logic.spec.ts` → validación de palabras
* `blocks.component.spec.ts` → mensajes y estados del componente
* `app.component.spec.ts` → renderizado del juego en el root

---

## Cómo usar el juego

1. Verás en pantalla:

   * Todos los bloques con sus dos letras.
   * Un campo de texto para escribir una palabra.
   * Un botón **“Probar palabra”**.

2. Reglas:

   * Máximo de letras = número de bloques disponibles.
   * Solo se aceptan letras A–Z (sin ñ, tildes ni símbolos).
   * Si la palabra es válida:

     * Aparece un mensaje en naranja indicando éxito.
     * El contenedor se anima con un pequeño “bounce”.
    * Si la palabra no se puede formar:

     * Aparece un mensaje en naranja indicando que no se puede.
     * El contenedor se anima con un “shake” de error.

Ejemplos típicos (según el puzzle original):

* `A` = true
* `LIBRO` = true 
* `BOZO` =false
* `TRAJE` =false
* `COMUN` =true
* `CAMPANA` =false

---

##  Decisiones técnicas 

* **Función pura de dominio**
  La lógica `canFormWord` está en un archivo aparte (`blocks.logic.ts`) para:

  * Poder probarla aislada sin Angular.
  * Reutilizarla fácilmente en otros contextos.

* **Servicio Angular (`BlocksService`)**
  Envuelve la función pura:

  * Punto central para cambiar la colección de bloques.
  * Lugar natural para agregar logs, métricas o llamadas externas si fuese necesario.

* **Componente standalone con OnPush**
  El componente de juego:

  * Es standalone (`standalone: true`).
  * Usa `ChangeDetectionStrategy.OnPush` para mejor rendimiento.
  * Solo se encarga de:

    * Binding con el template.
    * Manejar el estado de `word`, `result`, `message`.

* **Tests con `data-testid`**
  Se usa el atributo `data-testid="result-message"` en el mensaje de resultado:

  * Evita seleccionar por clases de Tailwind.
  * Hace las pruebas más robustas frente a cambios de estilo.

---

## Posibles mejoras futuras

* Resaltar visualmente los bloques que se están usando para formar la palabra.
* Mostrar un historial de palabras probadas.
* Permitir cambiar dinámicamente el set de bloques.
* Usar Angular Animations para transiciones más complejas.

---

##  Autora: Shirley Johanna Muelle Camargo

Proyecto implementado como ejercicio de prueba técnica y práctica de:

* Angular moderno con standalone components.
* Arquitectura limpia en pequeño (dominio → servicio → UI).
* Buenas prácticas de pruebas unitarias.

```
