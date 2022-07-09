Para definir un módulo primero tenemos que crear un archivo que exporte algo.
Podemos empezar con `a.js` que exporte una función `hello` y además ejecute un
`console.log()`, muy importante para luego entender algunos detalles

```js
console.log("Hello from module 'a'");

function hello() {
  console.log("hello function!");
}

module.exports = { hello };
```

Fijemonos que no sólo exporta una función, `{ hello }` está escrito entre
corchetes. Esto significa que estamos _definiendo un objeto_ cuya única
propiedad es `hello`, una función.

---

Si creamos un módulo siempre va a ser porque queremos que alguien más lo
utilice, nuestro "cliente", por decirlo así, ya que consume nuestro módulo, será
`b.js`.

```js
const { hello } = require("./a");

console.log("Hello from module 'b'");

function goodbye() {
  hello();
  console.log("Goodbye!");
}

module.exports = { goodbye };
```

Prestemos mucha atención a la primer línea, `const { hello } = require("./a")`
nos diche que `require("./a")` devuelve un objeto. Este objeto lo podemos
desarmar en pedacitos, sus propiedades. `const { hello } = ···` crea una
variable `hello` que contine a la propiedad `hello` devuelta por
`require("./a")`.

Pero este archivo además de consumir, también define una función `goodbye()`
para exportar. En esta función usamos a `hello()` que definimos en el módulo
`a.js`.

---

Por último vamos a tener un archivo principal, aquel que utilice y corra
nuestros dos módulos, `main.js`. Este archivo no es un módulo ya que solamente
consume.

```js
const { hello } = require("./a");
const { goodbye } = require("./b");

hello();
goodbye();
```

En las primeras dos líneas importamos las funciones `hello` y `goodbye`. Luego,
las ejecutamos. ¿Que piensan que va a pasar? No olvidemos que en `a.js` y `b.js`
hicimos dos `console.log()`, uno en cada módulo.

```
Hello from module 'a'
Hello from module 'b'
hello function!
hello function!
Goodbye!
```

A pesar de que `a.js` es importada dos veces, una en `b.js` y otra en `main.js`,
`console.log("Hello from module 'a'");` sólo se ejecuta una vez. Esto es porque
la ejecución del archivo `a.js` se guarda en un caché cuando el módulo es
requerido por `b.js`, y desde allí se extrae la información de `a.js` cuando es
requerida por `main.js`.


**Referencias:**

Node.js v18.5.0. «Modules: CommonJS modules». Documentation. Accedido 8 de julio
de 2022. https://nodejs.org/api/modules.html#modules-commonjs-modules.
