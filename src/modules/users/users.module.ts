import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepo } from './users.repo';
import { UsersController } from './users.controller';

@Module({
  controllers:[UsersController],
  providers: [UsersService,UsersRepo]
})
export class UsersModule {}
