import { join } from "path";
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.NODE_PORT || 4000;

export const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Tasks API",
			version: "1.0.0",
			description: "A simple express library API",
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
			},
		],
	},
	apis: [join(__dirname, "../app/controllers/*.ts")],
};
