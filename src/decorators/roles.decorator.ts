import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/modules/auth/enum/roles';

export const RequiredRolesAndPositions = (params: { roles: Roles[]; }) =>
	SetMetadata('roles', params);
