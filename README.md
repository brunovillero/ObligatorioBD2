Pasos para correr la aplicación:

1)

El primer paso debera ser crear un archivo .env con la siguiente informacion (copiar y pegar)

MYSQL_ROOT_PASSWORD='root'
MYSQL_DATABASE='mydb'
MYSQL_HOST='dbmysql'

el nombre de la base de datos en mydb

2)

Para iniciar la aplicacion solo es necesario escribir "docker compose up" en la consola situandoce dentro del proyecto. Es necesario tener docker instalado.

3)

Para conectarse a la base de datos de forma externa se debe conectar al puerto 3306, con usuario 'root' y contraseña 'root'

4)

Correr los comandos del archivo init.sql en su herramientas de administración de bases de datos preferida. Esto le insertara las tablas y datos necesarios.

5)

Para el front se debe estar en la carpeta react (cd react estando dentro del proyecto), una vez ahi, se usa el comando npm start. Y ahi se montara el front en localhost:3000. Es necesario hacer primero el back para poder logearse y registrarse.
