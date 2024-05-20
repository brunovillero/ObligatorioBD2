Introduction:
  Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker development environment. Sail provides a great starting point for building a Laravel application using PHP, MySQL, and Redis without requiring prior Docker experience. [https://laravel.com/docs/11.x/sail#introduction](https://laravel.com/docs/11.x/sail#introduction)

Setup Laravel Sail on Windows:
Make sure to install Docker Desktop. Next, you should ensure that Windows Subsystem for Linux 2 (WSL2) is installed and enabled.

Open the wsl console on the project directory and run the following commands:
  1. Start container: ./vendor/bin/sail up -d
  2. Run laravel basic migrations: ./vendor/bin/sail php artisan migrate
  3. Install npm packages: ./vendor/bin/sail npm run install
  4. Build react app: ./vendor/bin/sail npm run build (hot reload not implemented)
  5. Test [http://localhost:80/](http://localhost:80/)

Tecnologías Usadas

Backend:

PHP con el framework Laravel: Utilizamos Laravel principalmente porque el equipo tiene amplio conocimiento de esta tecnología, lo que nos permite avanzar más rápido en la creación de migraciones, modelos, relaciones y la configuración del proyecto.

Frontend:

React: Empleamos la librería React de JavaScript. Nos permite crear el frontend de manera rápida, acelera el flujo para la creación de todas las vistas y el equipo posee conocimientos sólidos en esta tecnología.

Base de Datos:

MySQL: Es la elección de la materia y el equipo también posee conocimientos en esta base de datos, lo que facilita su uso.

Diseño de la Aplicación:

Nuestra aplicación consta de dos tipos de usuarios:

Admin: Tiene la responsabilidad y permiso de subir los resultados de los partidos. No puede jugar.
Jugador: Es quien crea las predicciones de todos los partidos. No puede subir los resultados de los partidos.

Flujo de la Aplicación:

Como Admin:

Inicio de sesión
Escribir los resultados de todos los partidos
Subir los resultados de todos los partidos

Como Jugador:

Inicio de sesión o registro
Predecir los resultados disponibles
(Opcional) Visualizar los resultados y los puntajes
Fundamentos de las Vistas

Version 1.0 de la vista de un user:
![Flujo](https://github.com/brunovillero/ObligatorioBD2/assets/107601706/95a28d1f-7d29-496a-8d65-7eab54040ea4)


Dado que hay dos tipos de usuarios con permisos distintos, al ingresar a la aplicación, según el rol que tengas, ingresarás a las predicciones y resultados de los partidos o a la página para ingresar los resultados de los mismos

Decidimos crear una sola vista para el usuario, en la cual puede ingresar todas sus predicciones y observar los puntajes.
