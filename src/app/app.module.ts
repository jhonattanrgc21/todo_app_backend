// Modules
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from "../config/swaggerOptions";


// Routes
import routes from "./controllers/index.controller";

// ======================================
//				Bootstraping
// ======================================
export default function App(){

    const app = express();

	// middlewares
	app.use(express.json());
	app.use(morgan('dev'));
	app.use(cors());

	const specs = swaggerJsDoc(options);

	// Routes
    app.use('/api', routes);
	app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
	return app;
}
