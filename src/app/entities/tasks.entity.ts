// Modules
import { Column, Entity } from 'typeorm';

// Entities
import UuidEntity from "./uuid.entity";

// Task Entity
@Entity('tasks')
export default class Task extends UuidEntity{
	@Column({
		type: 'text',
		nullable: false,
		comment: "Descripcion de la tarea"
	})
	public name: string;

	@Column({
		type: 'bool',
		comment: "¿Finalizada?",
		default: false
	})
	public checked: boolean;
}
