import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepo: Repository<Todo>
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepo.find();
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  async create(dto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepo.create(dto);
    return this.todoRepo.save(todo);
  }

  async update(id: string, dto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);
    return this.todoRepo.save({ ...todo, ...dto });
  }

  async remove(id: string): Promise<void> {
    const todo = await this.findOne(id);
    await this.todoRepo.remove(todo);
  }
}
