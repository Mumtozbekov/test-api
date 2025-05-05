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
import { AuthorizationGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from '../auth/enum/roles';
import { CreateProjectDto } from 'src/modules/project/dtos/createProjectDto';
import { CurrentUser } from 'src/decorators/user.decorator';
import { ICurrentUser } from 'src/interfaces/currentUser';
import { ProjectService } from './project.service';

@Controller('projects')
@ApiBearerAuth('authorization')
@UseGuards(AuthorizationGuard, RolesGuard)
@RequiredRoles({ roles: [Roles.ADMIN, Roles.ORG_CHIEF] })
export class ProjectController {
  @Inject() private readonly service: ProjectService;

  @Post('create')
  createProject(
    @Body() payload: CreateProjectDto,
    @CurrentUser() user: ICurrentUser,
  ) {
    return this.service.createProject(payload, user);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  getProjectById(@Param() params: any) {
    return this.service.getProjectById(params.id);
  }
}
