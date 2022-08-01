import { Column, Entity } from 'typeorm';
import UuidEntity from "./uuid.entity";

@Entity('tasks')
export default class Task extends UuidEntity{

	// Atributes
	@Column({
		type: 'text',
		nullable: false,
		comment: "Descripcion de la tarea"
	})
	private name: string;

	@Column({
		type: 'bool',
		comment: "¿Finalizada?",
		default: false
	})
	private check: boolean;

	// Getters
	public getName(): string{
		return this.name;
	}

	public getCheck(): boolean{
		return this.check;
	}

	// Setters
	public setName(newName: string){
		this.name = newName;
	}

	public setCheck(newCheck: boolean){
		this.check = newCheck;
	}
}
