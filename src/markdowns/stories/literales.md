# *Template literals* o *comillas invertidas*
#### 13/09/2020

Como sabeis en *JavaScript*, para declarar un **String** hay que ponerlo entre comillas:

	const texto = "me llamo Manuel"
	const texto = 'me llamo Manuel'
	
Desde la versión **ES6** es posible hacerlo con las comillas invertidas:

	const texto = `me llamo Manuel`
	
¿Que ventajas tiene esto?, una de ellas es la **inserciòn de variables**. La forma habitual:

	const nombre = 'Manuel'
	const texto = 'me llamo ' + nombre
	
Con comillas literales

	const nombre = `Manuel`
	const texto = `me llamo ${nombre}`
	
Además acepta funciones u operaciones, veamos un ejemplo:

	const num1 = `7`
	const num2 = `4`
	const multiplicar = `Multiplicar ${num1} y ${num2} da como resultado ${num1 * num2}`
	
Y ahora con una función que comprueba si un número es primo o no:

	const num = `8`
	const primo = `El número ${num} ${esPrimo(num) ? 'es primo' : 'no es primo'}
	
Otra ventaja es que te permite definir cadenas de texto en varias líneas:

	const texto = `Esta es la primera linea,
	segunda línea y
	tercera linea`


Y por último los **Template tags**, no es más que una manera de ejecutar una función con *Strings*. Por ejemplo creamos esta función:

```
function prueba(literales, ...expresiones) {
  for (let i = 0; i < literales.length; i++) {
    console.log(`literal ${i} es: "${literales[i]}"`);
  }
  for (let j = 0; j < expresiones.length; j++) {
    console.log(`expresión ${j} es: "${expresiones[j]}"`);
  }
}
```

Al ejecutar la función con un *String* se crean dos *Arrays*, "literales" que contiene las partes de texto y "expresiones" que contiene, como su nombre indica las expresiones.

Al ejecutar:

```
const num1 = 5;
const num2 = 3;

const resultado = prueba`La suma de ${num1} y ${num2} es igual a ${
  num1 + num2
}`;
console.log(resultado);
```

esto da como resultado:

```
literal 0 es: "La suma de "
literal 1 es: " y "
literal 2 es: " es igual a "
literal 3 es: ""
expresión 0 es: "5"
expresión 1 es: "3"
expresión 2 es: "8"
```

Visto en [neoguias.com](https://www.neoguias.com/template-literals-javascript/)

Salu2