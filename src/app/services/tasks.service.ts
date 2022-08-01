import Task from '../entities/tasks.entity'
import { CreateTask } from '../interfaces/tasks.interface';

export const createTask = async (newTask: CreateTask) => {
	let entity = new Task();
	entity.setName(newTask.name);
	await entity.save();
	return entity;
}
