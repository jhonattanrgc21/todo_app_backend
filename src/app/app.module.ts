// Modules
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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

	// Routes
    app.use('/api', routes);
	return app;
}
