import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  isComplete: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'verifiedBy' })
  verifiedBy: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
