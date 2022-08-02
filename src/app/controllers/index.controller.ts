// Modules
import { Router } from 'express';

// Controllers
import  taskController from './tasks.controller'

const routes = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */
routes.use('/task', taskController)

export default routes
