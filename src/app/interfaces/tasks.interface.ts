export interface Task{
	id: number;
	name: string;
	checked: boolean;
	created_at: string;
	updated_at: string;
}

export type CreateTask = Pick<Task, 'name'>;
export type UpdateTask = Partial<Pick<Task, 'name' | 'checked'>>;
