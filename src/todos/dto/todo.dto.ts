import { PartialType, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum TodoStatus {
  TODO = 'Todo',
  IN_PROGRESS = 'In Progress',
  BACKLOG = 'Backlog',
  CANCELED = 'Canceled',
  DONE = 'Done'
}

export enum TodoPriority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}

export enum TodoLabel {
  DOCUMENTATION = 'Documentation',
  FEATURE = 'Feature',
  BUG = 'Bug'
}

export class CreateTodoDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional({ enum: TodoStatus })
  @IsOptional()
  @IsEnum(TodoStatus)
  status?: TodoStatus;

  @ApiPropertyOptional({ enum: TodoPriority })
  @IsOptional()
  @IsEnum(TodoPriority)
  priority?: TodoPriority;

  @ApiPropertyOptional({ enum: TodoLabel })
  @IsOptional()
  @IsEnum(TodoLabel)
  label?: TodoLabel;
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
