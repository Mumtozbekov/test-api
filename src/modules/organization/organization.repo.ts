import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dtos/createOrganizationDto';
import { Knex } from 'knex';

@Injectable()
export class OrganizationRepo {
  @Inject('KnexConnection') private readonly knex: Knex;

  insert({ name, created_by }) {
    return this.knex('users')
      .insert({
        name: name,
        created_by: created_by,
      })
      .returning('*');
  }
}
