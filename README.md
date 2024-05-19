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
