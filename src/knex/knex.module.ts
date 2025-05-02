import { Module, Global } from '@nestjs/common';
import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1111',
    database: 'test_db',
  },
});

@Global()
@Module({
  providers: [
    {
      provide: 'KnexConnection',
      useValue: db,
    },
  ],
  exports: ['KnexConnection'],
})
export class KnexModule {}