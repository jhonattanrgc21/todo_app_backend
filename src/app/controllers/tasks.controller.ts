// Modules
import { Router, Request, Response } from 'express';

// Interfaces
import { Task, CreateTask, UpdateTask } from '../interfaces/tasks.interface';

// Services
import { createTask, findAll, findAllCheck, findAllNoCheck, findById, findByName, updateTask, deleteTaskById } from '../services/tasks.service'

const routes = Router();

// Obtener Todas las tareas
routes.get('/all',  async (req: Request, res: Response) => {
	const tasks: Task[] = await findAll();
	if(tasks.length > 0)
		res.json(tasks);
	else
		res.json([]);
})

// Oobtener tareas finalizadas
routes.get('/allCheck',  async (req: Request, res: Response) => {
	const tasks: Task[] = await findAllCheck();
	if(tasks.length > 0)
		res.json(tasks);
	else
		res.json([]);
})

// Oobtener tareas pendientes
routes.get('/allNoCheck',  async (req: Request, res: Response) => {
	const tasks: Task[] = await findAllNoCheck();
	if(tasks.length > 0)
		res.json(tasks);
	else
		res.json([]);
})

// Obtener una tarea por ID
routes.get('/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const task: Task = await findById(id);
	if(task)
		res.json(task);
	else
		res.json({});
})

// Obtener una tarea por nombre
routes.get('/', async (req: Request, res: Response) => {
	const name = String(req.query.name).toLowerCase();
	const task: Task = await findByName(name);
	if(task)
		res.json(task);
	else
		res.json({});
})

// Crear una tarea
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

// Actualizar una tarea
routes.put('/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const task: UpdateTask = req.body;
	try {
		const entity: Task = await updateTask(id, task);
		res.json({
			entity,
			message: 'Task created successfully'
		})
	} catch (error) {
		res.json({
			entity: {},
			message: 'Error, task not found'
		})
	}
})

// Eliminar una tarea
routes.delete('/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const task: Task = await findById(id);
	if(task){
		await deleteTaskById(id);
		res.json({
			entity: task,
			message: 'Task deleted successfully'
		})
	}
	else{
		res.json({
			entity: {},
			message: 'Error, task not found'
		})
	}
})

export default routes
