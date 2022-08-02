// Entities
import Task from '../entities/tasks.entity';

// Interfaces
import { CreateTask, UpdateTask } from '../interfaces/tasks.interface';

export const createTask = async (newTask: CreateTask) => {
	let entity = new Task();
	entity.name = newTask.name.toLowerCase();
	await entity.save();
	return entity;
}

export const findAll = async () => {
	return await Task.find();
}

export const findAllCheck = async () => {
	return await Task.findBy({check: true});
}

export const findAllNoCheck = async () => {
	return await Task.findBy({check: false});
}

export const findById = async (id: number) => {
	return await Task.findOneBy({id});
}

export const findByName = async (name: string) => {
	name = name.toLowerCase();
	return await Task.findOneBy({name});
}

export const updateTask = async (id: number, task: UpdateTask) => {
	let entity: Task = await findById(id);
	entity.name = task.name ? task.name.toLowerCase() : entity.name;
	entity.check = task.check != undefined ? task.check : entity.check;
	await entity.save();
	return entity;
}

export const deleteTaskById = async (id: number) => {
	return Task.delete(id);
}
