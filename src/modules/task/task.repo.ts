import { Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { CreateTaskDto } from './dtos/createTaskDto';
import { ICurrentUser } from 'src/interfaces/currentUser';
import { TaskStatuses } from 'src/enum/taskStatuses';
import { ChangeTaskStatusDto } from './dtos/changeTaskStatusDto';

export class TaskRepo {
  @Inject('KnexConnection') private readonly knex: Knex;

  createTask(payload: CreateTaskDto, user: ICurrentUser) {
    return this.knex('task')
      .insert({
        project_id: payload.project_id,
        due_date: payload.due_date,
        worker_user_id: payload.worker_user_id,
        created_by: user.id,
        status: TaskStatuses.CREATED,
      })
      .returning('*');
  }

  getTasksListByWorker(id: number) {
    return this.knex('task').where('worker_user_id', id);
  }
  getTasksByProject(project_id: number) {
    return this.knex('task').where('project_id', project_id);
  }

  getTasksListByStatus(status: number, user: ICurrentUser) {
    return this.knex('task')
      .where({ worker_user_id: user.id, status: status })
      .returning('*')
      .first();
  }
  getTaskById(task_id: number) {
    return this.knex('task').where('id', task_id).returning('*').first();
  }

  changeTaskStatus(payload: ChangeTaskStatusDto) {
    return this.knex('task')
      .where('id', payload.task_id)
      .update({
        status: payload.status,
        done_at: payload.status == TaskStatuses.DONE ? new Date() : null,
      });
  }
}
