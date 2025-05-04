import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dtos/createOrganizationDto';
import { CurrentUser } from 'src/decorators/user.decorator';
import { ICurrentUser } from 'src/interfaces/currentUser';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { RequiredRoles } from 'src/decorators/roles.decorator';
import { Roles } from '../auth/enum/roles';

@Controller('organization')
@ApiBearerAuth('authorization')
@UseGuards(AuthorizationGuard, RolesGuard)
@RequiredRoles({ roles: [Roles.ADMIN] })
export class OrganizationController {
  @Inject() private service: OrganizationService;

  @Post('/create')
  createOrganizatin(
    @CurrentUser() user: ICurrentUser,
    @Body() payload: CreateOrganizationDto,
  ) {
    console.log(user);

    return this.service.createOrganization(user, payload);
  }
}
