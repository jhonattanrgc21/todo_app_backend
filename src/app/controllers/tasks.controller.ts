// Modules
import { Router, Request, Response } from 'express';

// Interfaces
import { Task, CreateTask, UpdateTask } from '../interfaces/tasks.interface';

// Services
import { createTask, findAll, findAllCheck, findAllNoCheck, findById, findByName, updateTask, deleteTaskById } from '../services/tasks.service'

const routes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: the auto-generated id of task
 *        name:
 *          type: string
 *          description: the name of the task
 *        check:
 *          type: boolean
 *          description: the status of the task
 *        created_at:
 *          type: string
 *          description: creation date
 *        updated_at:
 *          type: string
 *          description: update date
 *      example:
 *        id: 1
 *        name: My first Task
 *        check: false
 *        created_at: 2022-08-01T19:23:53.516Z
 *        updated_at: 2022-08-01T19:23:53.516Z
 *    CreateTask:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the task
 *      required:
 *        - name
 *      example:
 *        name: My first Task
 *    UpdateTask:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the task
 *        check:
 *          type: boolean
 *          description: the status of the task
 *      example:
 *        name: My new first Task
 *        check: true
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: number
 *      description: the task id
 *    taskName:
 *      in: query
 *      name: name
 *      required: true
 *      schema:
 *        type: string
 *      description: the task name
 */

/**
 * @swagger
 * /api/task/all:
 *  get:
 *    summary: Returns a list of tasks
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
routes.get('/all',  async (req: Request, res: Response) => {
	const tasks: Task[] = await findAll();
	if(tasks.length > 0)
		res.json(tasks);
	else
		res.json([]);
})

/**
 * @swagger
 * /api/task/allCheck:
 *  get:
 *    summary: Returns a list of finished task
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of finished task
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
routes.get('/allCheck',  async (req: Request, res: Response) => {
	const tasks: Task[] = await findAllCheck();
	if(tasks.length > 0)
		res.json(tasks);
	else
		res.json([]);
})

/**
 * @swagger
 * /api/task/allNoCheck:
 *  get:
 *    summary: Returns a list of pending tasks
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of pending tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
routes.get('/allNoCheck',  async (req: Request, res: Response) => {
	const tasks: Task[] = await findAllNoCheck();
	if(tasks.length > 0)
		res.json(tasks);
	else
		res.json([]);
})

/**
 * @swagger
 * /api/task/{id}:
 *  get:
 *    summary: Returns a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: The task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 */
routes.get('/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const task: Task = await findById(id);
	if(task)
		res.json(task);
	else
		res.json({});
})

/**
 * @swagger
 * /api/task:
 *  get:
 *    summary: Returns a task by name
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskName'
 *    responses:
 *      200:
 *        description: The task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 */
routes.get('/', async (req: Request, res: Response) => {
	const name = String(req.query.name).toLowerCase();
	const task: Task = await findByName(name);
	if(task)
		res.json(task);
	else
		res.json({});
})

/**
 * @swagger
 * api//task:
 *  post:
 *    summary: Create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateTask'
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Some server error
 *
 */
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

/**
 * @swagger
 * /api/task/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UpdateTask'
 *    responses:
 *      200:
 *        description: The updated task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 */
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

/**
 * @swagger
 * /api/task/{id}:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: the task was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 */
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
