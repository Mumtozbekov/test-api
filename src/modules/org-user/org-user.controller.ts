import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrgUserService } from './org-user.service';
import { CreateOrgUserDto } from './dtos/createOrgUserDto';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { RequiredRoles } from 'src/decorators/roles.decorator';
import { Roles } from '../../enum/roles';

@Controller('org-user')
@ApiBearerAuth('authorization')
@UseGuards(AuthorizationGuard, RolesGuard)
@RequiredRoles({ roles: [Roles.ADMIN] })
export class OrgUserController {
  @Inject() private readonly service: OrgUserService;

  @Post('/create')
  createOrgUser(@Body() payload: CreateOrgUserDto) {
    return this.service.createOrgUser(payload);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  getOrgUser(@Param() params: any) {
    return this.service.getUser(params.id);
  }
}
