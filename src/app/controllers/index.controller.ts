import { Router } from 'express';
import  taskController from './tasks.controller'

const router = Router();

router.use('/task', taskController)

export default router
