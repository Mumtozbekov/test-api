import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { JwtModule } from '@nestjs/jwt';
import { ProjectRepo } from './project.repo';

@Module({
  imports: [JwtModule],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectRepo],
})
export class ProjectModule {}
