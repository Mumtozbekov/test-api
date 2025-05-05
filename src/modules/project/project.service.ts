import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'src/modules/project/dtos/createProjectDto';
import { ICurrentUser } from 'src/interfaces/currentUser';
import { ProjectRepo } from './project.repo';

@Injectable()
export class ProjectService {
  @Inject() private readonly repo: ProjectRepo;

  createProject(payload: CreateProjectDto, user: ICurrentUser) {
    return this.repo.createProject(payload, user);
  }

  getProjectById(id: number) {
    return this.repo.getProjectById(id);
  }
}
