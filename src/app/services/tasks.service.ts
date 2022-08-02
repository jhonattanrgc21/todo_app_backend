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

export const findAllChecked = async () => {
	return await Task.findBy({checked: true});
}

export const findAllNoChecked = async () => {
	return await Task.findBy({checked: false});
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
	entity.checked = task.checked != undefined ? task.checked : entity.checked;
	await entity.save();
	return entity;
}

export const deleteTaskById = async (id: number) => {
	return Task.delete(id);
}

export const deleteAllTask = async () => {
	return Task.clear();
}
