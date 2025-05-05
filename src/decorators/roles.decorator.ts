import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/enum/roles';

export const RequiredRoles = (params: { roles: Roles[] }) =>
  SetMetadata('roles', params);
