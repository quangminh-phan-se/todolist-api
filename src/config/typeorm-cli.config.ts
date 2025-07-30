import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Todo } from '@/todos/entities/todo.entity';
import { CreateTodoTable1753858925194 } from '@/migrations/1753858925194-CreateTodoTable';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.DB_LOGGING === 'true',
  entities: [Todo],
  migrations: [CreateTodoTable1753858925194]
});
