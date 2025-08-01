import { Todo } from '@/todos/entities/todo.entity';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [Todo],
  synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  migrationsRun: false
});
