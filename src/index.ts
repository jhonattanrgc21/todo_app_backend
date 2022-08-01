// Modules
import 'reflect-metadata';
import App from './app/app.module';
import * as dotenv from 'dotenv';
import {AppDataSource} from './config/database';

async function main(){
	// Para leer las variables de entorno
	dotenv.config();

	const PORT = process.env.NODE_PORT || 4000;

	// Iniciando la conexion a la BD
	try {
		await AppDataSource.initialize();
		const app = App();

		app.listen(PORT, () =>
			console.log(`Application is running on: http://localhost:${PORT}`),
		);
	} catch (error) {
		console.log('Error, database not found');
	}
}

main();
