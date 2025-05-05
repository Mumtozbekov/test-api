import { Inject } from '@nestjs/common';
import { Knex } from 'knex';
import { CreateOrgUserDto } from './dtos/createOrgUserDto';

export class OrgUserRepo {
  @Inject('KnexConnection') private readonly knex: Knex;

  insert(payload: CreateOrgUserDto) {
    return this.knex('orguser')
      .insert({
        user_id: payload.user_id,
        org_id: payload.org_id,
      })
      .returning('*');
  }

  getUser(id: number) {
    return this.knex('orguser')
      .where('orguser.id', id)
      .first()
      .join('users', 'users.id', '=', 'orguser.user_id')
      .join('organization', 'organization.id', '=', 'orguser.org_id')
      .select(
        'orguser.id',
        'orguser.user_id',
        'orguser.org_id',
        'orguser.role',

        'users.id as user_id',
        'users.name as user_name',
        'users.username as user_username',
        'users.password as user_password',
        'users.created_by as user_created_by',

        'organization.id as org_id',
        'organization.name as org_name',
        'organization.created_by as org_created_by',
      )
      .then((row) => {
        if (!row) return null;

        return {
          id: row.id,
          user_id: row.user_id,
          org_id: row.org_id,
          role: row.role,
          user: {
            id: row.user_id,
            name: row.user_name,
            username: row.user_username,
            password: row.user_password,
            created_by: row.user_created_by,
          },
          organization: {
            id: row.org_id,
            name: row.org_name,
            created_by: row.org_created_by,
          },
        };
      });
  }
}
