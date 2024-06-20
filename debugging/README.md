# Prueba 2.5 - Debugging

En una primera inspección, se me ha hecho raro que se pase como parámetros en el array de dependencias del 'useEffect' dos funciones. Aunque a priori funcione, he supuesto que el bug pueda estar ahí. Al final, por el modo de definición de esas funciones, no se estaría pasando una función, si no la referencia a la misma, por lo que en cada renderizado, la referencia cambiaría y se ejecutaría el 'useEffect' de manera innecesaria.

No he conseguido debuggear el error como tal, a pesar de haber aplicado los siguientes métodos de debuggeo:

- console.log en los bloques tanto de 'useEffect' como de las funciones 'increment()' y 'decrement()', en busca de renderizados adicionales innecesarios

- Inspección de traza en el apartado 'Performance' de las 'Herramientas de desarrollador', tratando de encontrar una mayor carga del navegador provocado por un número excesivo de renderizaciones

- Uso de React DevTools y e inspección de la 'data' del componente en la consola, con el fin de encontrar anomalías en su estado

Pese a no haber logrado replicar el bug, ni localizarlo con las herramientas de debugging, la solución sería eliminar las dos funciones del array de dependencias del 'useEffect' y pasar como única variable, el state 'count'. De tal manera que el título de la página se actualizará cuando el valor del propio 'state' cambie, y no cuando haya un cambio en la referencia de cualquiera de las funciones tras un re-renderizado.

