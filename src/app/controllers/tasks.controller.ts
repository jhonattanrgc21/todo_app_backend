import { CreateTask } from '../interfaces/tasks.interface';
import { Router, Request, Response } from 'express';
import { createTask } from '../services/tasks.service'

const routes = Router();

routes.get('/all', (req: Request, res: Response) => {

})

routes.get('/:id', (req: Request, res: Response) => {

})

routes.post('/',  async(req: Request, res: Response) => {
	const newTask: CreateTask = req.body;
	try {
		const task = await createTask(newTask);
		res.json({
			entity: task,
			message: 'Task created successfully'
		})
	} catch (error) {
		res.json({
			entity: {},
			message:'Error, failed to create task'
		})
	}
})

routes.put('/:id', (req: Request, res: Response) => {

})

routes.delete('/:id', (req: Request, res: Response) => {

})

export default routes
