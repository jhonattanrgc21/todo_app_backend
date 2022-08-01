// Modules
import { Router } from 'express';

// Controllers
import  taskController from './tasks.controller'

const routes = Router();

// Task Routes
routes.use('/task', taskController)

export default routes
