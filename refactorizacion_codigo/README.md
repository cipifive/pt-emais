# Prueba 2.2 - Refactorización de código

Se han realizado las siguientes modificaciones en el código:

- Se ha importado el módulo 'FC' propio de 'react' para identificar la función como Functional Component.
- Se ha generado un modelo para la interfaz UserProfileProps, de tal manera que evitamos el uso de la sentencia 'any' en el tipado del Componente e indicamos el tipo de datos que recibirá el componente como parámetros a través de las props. Se encuentra en la carpeta 'models'.
- Se aplica desestructuración al recibir las props en el componente 'UserProfile.tsx', de tal manera que no hace falta acceder a las propiedades a través del objeto user, y podemos utilizar las variables durante el resto del código.
