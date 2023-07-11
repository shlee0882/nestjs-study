import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks') // Specifies the name of the table in the database
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
