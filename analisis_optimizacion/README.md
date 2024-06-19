# Prueba 2.4 - Análisis y Optimización

Se han realizado las siguientes modificaciones en el código:

- Se ha utilizado el hook 'useMemo' para almacenar en caché los datos calculados en la función 'processData()'. Se presupone que esta función va a tener una gran carga de cálculo, ya que en el 'data' seguramente vengan muchos items. Con 'useMemo', hacemos que este resultado quede en caché y no se volverá a realizar este recálculo a no ser que las variables que están en el propio array de dependencias de la función varíen. En este caso, solo se recalculará si el valor que se obtiene de 'data' cambia.
- Más allá de la optimización, se ha tipado todo el código, generando interfaces para los tipos de dato que se manejan en la aplicación, así como para las props. Con el fin de eliminar el uso de 'any' en el desarrollo.