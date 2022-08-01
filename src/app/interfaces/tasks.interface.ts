export interface Task{
	id: number;
	name: string;
	check: boolean;
	created_at: Date;
	updated_at: Date;
}

export type CreateTask = Pick<Task, 'name'>;
export type UpdateTask = Partial<Pick<Task, 'name' | 'check'>>;
