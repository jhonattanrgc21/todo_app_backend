// Modules
import { join } from 'path';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

// Database Config
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: true,
	entities: [join(__dirname, '../app/entities/**.entity.{ts,js}')],
    logging: true,
    subscribers: [],
    migrations: [],
})
