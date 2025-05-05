import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dtos/createOrganizationDto';
import { Knex } from 'knex';

@Injectable()
export class OrganizationRepo {
  @Inject('KnexConnection') private readonly knex: Knex;

  insert({ name, created_by }) {
    return this.knex('organization')
      .insert({
        name: name,
        created_by: created_by,
      })
      .returning('*');
  }

  getOrganization(id: number) {
    return this.knex('organization').where('id', id).first();
  }
}
