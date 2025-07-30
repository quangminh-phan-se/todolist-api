import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTodoTable1753858925194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TYPE "todo_status_enum" AS ENUM (
        'Todo', 'In Progress', 'Backlog', 'Canceled', 'Done'
      )
    `);
    await queryRunner.query(`
      CREATE TYPE "todo_priority_enum" AS ENUM (
        'High', 'Medium', 'Low'
      )
    `);
    await queryRunner.query(`
      CREATE TYPE "todo_label_enum" AS ENUM (
        'Documentation', 'Feature', 'Bug'
      )
    `);

    await queryRunner.createTable(
      new Table({
        name: 'todo',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'status',
            type: 'todo_status_enum',
            default: `'Todo'`
          },
          {
            name: 'priority',
            type: 'todo_priority_enum',
            default: `'Medium'`
          },
          {
            name: 'label',
            type: 'todo_label_enum',
            default: `'Documentation'`
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('todo');
    await queryRunner.query(`DROP TYPE "todo_status_enum"`);
    await queryRunner.query(`DROP TYPE "todo_priority_enum"`);
    await queryRunner.query(`DROP TYPE "todo_label_enum"`);
  }
}
