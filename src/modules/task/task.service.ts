import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { TaskRepo } from './task.repo';
import { CreateTaskDto } from './dtos/createTaskDto';
import { ICurrentUser } from 'src/interfaces/currentUser';
import { ChangeTaskStatusDto } from './dtos/changeTaskStatusDto';
import { TaskStatuses } from 'src/enum/taskStatuses';

@Injectable()
export class TaskService {
  @Inject() private readonly repo: TaskRepo;

  createTask(payload: CreateTaskDto, user: ICurrentUser) {
    return this.repo.createTask(payload, user);
  }

  getTasksListByWorker(id: number) {
    return this.repo.getTasksListByWorker(id);
  }

  getTasksListByStatus(status: number, user: ICurrentUser) {
    return this.repo.getTasksListByStatus(status, user);
  }

  getTasksByProject(project_id: number) {
    return this.repo.getTasksByProject(project_id);
  }

  async changeTaskStatus(payload: ChangeTaskStatusDto, user: ICurrentUser) {
    const task = (await this.repo.getTaskById(payload.task_id)) as any;
    console.log(task);

    if (task.worker_user_id != user.id) {
      throw new ForbiddenException();
    }
    return this.repo.changeTaskStatus(payload);
  }
}
