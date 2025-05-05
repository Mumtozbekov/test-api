import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepo } from './task.repo';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepo],
})
export class TaskModule {}
