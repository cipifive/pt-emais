# Prueba 2.3 - Decisiones de Desarrollo

Atendiendo a los requerimientos del proyecto:

- Utilizaría 'Zustand' para la gestión de estados globales. Lo antepondría a otras librerías de gestión de estados ya que considero que es bastante más escalable y explícito que otras soluciones como 'Redux' o el propio hook de react 'UseContext'.

- Para la autenticación, utilizaría tanto 'react-cookie' como 'react-jwt', lo que me permitiría securizar el acceso a la aplicación web a través del cifrado de la información del usuario en un token, y almacenarlo en una cookie en el navegador, donde se podrían configurar parámetros de la misma (duración, dominio...). Son librerías muy sencillas de utilizar, que además en consonancia con Zustand permitiría gestionar esta autenticación y manejo de tokens en el ámbito global del aplicativo.

- Por último, para gestionar la contínua comunicación con una API REST, utilizaría 'axios', lo que me facilitaría el desarrollo de servicios y la gestión de promesas con cada llamada a un endpoint. Además, se integraría a la perfección con 'react-jwt' y 'react-cookie', ya que 'axios' permite realizar un archivo de configuración donde se puede gestionar el envío de este token, a través de una cookie en los headers.

En definitiva, la integración y el uso de estas tres librerías permitiría tener total control de la autenticación del usuario y de su información durante todo el proyecto.



Para estructurar la aplicación, una vez el usuario haya hecho login, se recibe la información del usuario cifrada en un token. Este token deberá ser almacenado por el frontend en una cookie ('react-cookie'), y decodificar de manera paralela para rellenar cualquier sección de la pantalla que requiera visualizar esa información del usuario ('react-jwt' + 'Zustand').
Dicho token será enviado en todas y cada una de las peticiones que se realicen a la API a partir de ahora, para asegurar la confidencialidad de los datos a los que se puede acceder desde fuera, con lo que será incluido su envío en el archivo de configuración de 'axios' que comentamos anteriormente.
Para completar esta secuencia, en el Componente 'root' del proyecto pondría un 'useEffect' con el array de dependencias vacío, de tal manera que se ejecutase cada vez que se accediese a la URL de la aplicación y llamase a una función 'whoAmI()' que determinaría si se ha encontrado una cookie de sesión en el navegador ('react-cookie'), y en caso afirmativo, la enviase al backend para que determinase si es válida o el usuario deberá ser redirigido al login de nuevo ('axios').