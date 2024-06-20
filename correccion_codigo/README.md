# Prueba 2.1 - Corrección de código

Se han realizado las siguientes modificaciones en el código:

- Se modifica el tipado del parámetro 'userId' que recibe la función 'fetchUserData()'. La interfaz User dice que el id del objeto es de tipo number, y la función lo identifica como string.

- Se modifica en entrecomillado de la URL a la que llama el fetch en la función. Se utilizan 'backsticks' en vez de comillas normales para permitir la correcta interpolación del 'userId' en la URL

- Se modifica el console.log de la función 'logUserName()'. En el ejemplo trata de acceder a la propiedad nombre con una mayúsucula al principio, y la interfaz User determina que esa propiedad del objeto debe ser en minúsculas. 

- Adicionalmente, se le añade una comprobación de si la llamada a la API ha sido satisfactoria. En caso contrario, se lanza una excepción que indica el error obteniendo los datos.