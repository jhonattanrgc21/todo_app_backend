# Todo App Backend

![Vista previa del swagger](./src/design/todo-swagger.png)

El proposito de este repositorio consiste en la implementacion de un API REST compuesta por operaciones CRUD para una entidad de tareas. 

## Tecnologías utilizadas
- [Node.js](https://nodejs.org/es/)
- [TypeScript](https://www.typescriptlang.org/download)
- [Express.js](https://expressjs.com/es/starter/installing.html)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/download/) 
- [Swagger-ui](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/).

## Instalacion

* Requisitos previos
    1. Instalar PostgreSQL.
    2. Instalar Node.js v16.16.0.
* Pasos para desplegar el proyecto de forma local
    1. Clonar el repositorio.
	2. Crear una Base de Datos en postgres con el nombre que desee (Se recomienda: `todo_app_db`).
    3. Renombrar el archivo `.env.example` por `.env`.
    4. Agregar su usuario y contraseña de PostgreSQL, el nombre de la base de datos y el numero de puerto donde quiera que corra la app en el archivo `.env`

		Ejemplo:
		```bash
		DB_USERNAME=postgres
		DB_PASSWORD=postgres
		DB_DATABASE=todo_app_db
		NODE_PORT=5000
		```
	5. Instalar las dependencias del `package.json`
	6. Correr la aplicaición.
	7. Ir al navegador e igresar a la ruta: http://localhost:5000/docs/ (El puerto varia segun la variable de entorno. Siguiento el ejemplo descrito anteriormente, se usa el puerto 5000)

## Comandos esenciales

### Instalación de dependencias del package.json
```bash
npm i
```

### Iniciar la app en modo de desarrollo
```bash
npm run dev
```

### Preparar y ejerutar la app para producción
```bash
npm start
```
