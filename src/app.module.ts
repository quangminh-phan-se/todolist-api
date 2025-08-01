import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@/database/migrations/database.module';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    DatabaseModule,
    TodoModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
