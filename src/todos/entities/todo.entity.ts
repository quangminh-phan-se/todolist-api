import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoPriority, TodoStatus, TodoLabel } from '../dto/todo.dto';

@Entity({ name: 'todo' })
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: TodoStatus,
    default: TodoStatus.TODO
  })
  status: TodoStatus;

  @Column({
    type: 'enum',
    enum: TodoPriority,
    default: TodoPriority.MEDIUM
  })
  priority: TodoPriority;

  @Column({
    type: 'enum',
    enum: TodoLabel,
    default: TodoLabel.DOCUMENTATION
  })
  label: TodoLabel;
}
