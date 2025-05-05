import { Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { CreateProjectDto } from 'src/modules/project/dtos/createProjectDto';
import { ICurrentUser } from 'src/interfaces/currentUser';

export class ProjectRepo {
  @Inject('KnexConnection') private readonly knex: Knex;

  createProject(payload: CreateProjectDto, user: ICurrentUser) {
    return this.knex('project')
      .insert({
        name: payload.name,
        org_id: payload.org_id,
        created_by: user.id,
      })
      .returning('*');
  }

  getProjectById(id: number) {
    return this.knex('project')
      .where('project.id', id)
      .first()
      .join('users', 'users.id', '=', 'project.created_by')
      .select(
        'project.id',
        'project.name',
        'project.org_id',

        'users.id as user_id',
        'users.name as user_name',
        'users.username as user_username',
        'users.created_by as user_created_by',
      )
      .then((row) => {
        if (!row) return null;
        return {
          id: row.id,
          org_id: row.org_id,
          user: {
            id: row.user_id,
            name: row.user_name,
            username: row.user_username,
            created_by: row.user_created_by,
          },
        };
      });
  }
}
