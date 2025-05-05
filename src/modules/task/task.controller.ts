import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { RequiredRoles } from 'src/decorators/roles.decorator';
import { Roles } from 'src/enum/roles';
import { AuthorizationGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { CreateTaskDto } from './dtos/createTaskDto';
import { CurrentUser } from 'src/decorators/user.decorator';
import { ICurrentUser } from 'src/interfaces/currentUser';
import { TaskService } from './task.service';
import { ChangeTaskStatusDto } from './dtos/changeTaskStatusDto';

@Controller('task')
@ApiBearerAuth('authorization')
@UseGuards(AuthorizationGuard, RolesGuard)
@RequiredRoles({ roles: [Roles.ADMIN, Roles.ORG_CHIEF] })
export class TaskController {
  @Inject() private readonly service: TaskService;

  @Post('create')
  createTask(
    @Body() payload: CreateTaskDto,
    @CurrentUser() user: ICurrentUser,
  ) {
    return this.service.createTask(payload, user);
  }

  @RequiredRoles({ roles: [Roles.ORG_WORKER] })
  @Get('list')
  getTaskList(@CurrentUser() user) {
    return this.service.getTasksListByWorker(user.id);
  }

  @RequiredRoles({ roles: [Roles.ORG_WORKER] })
  @Get('list-by-status:status')
  @ApiParam({ name: 'status', type: Number })
  getTaskLisByStatus(@Param() params: any, @CurrentUser() user) {
    return this.service.getTasksListByStatus(params.status, user);
  }

  @Get('list-by-project:project_id')
  @ApiParam({ name: 'project_id', type: Number })
  getTaskByProject(@Param() params: any) {
    return this.service.getTasksByProject(params.project_id);
  }

  @Post('change-status')
  @RequiredRoles({ roles: [Roles.ORG_WORKER] })
  changeTaskStatus(
    @Body() payload: ChangeTaskStatusDto,
    @CurrentUser() user: ICurrentUser,
  ) {
    return this.service.changeTaskStatus(payload, user);
  }
}
