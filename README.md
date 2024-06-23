El primer paso debera ser crear un archivo .env con la siguiente informacion (copiar y pegar)

MYSQL_ROOT_PASSWORD='root'
MYSQL_DATABASE='mydb'
MYSQL_HOST='dbmysql'

el nombre de la base de datos en mydb

Para iniciar la aplicacion solo es necesario escribir "docker compose up" en la consola situandoce dentro del proyecto.

el nombre de la base de datos en mydb
Para conectarse a la base de datos de forma externa se debe conectar al puerto 3306, con usuario 'root' y contraseña 'root'