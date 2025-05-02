import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/modules/auth/enum/roles';


@Injectable()
export class RolesAndPositionsGuard implements CanActivate {
	constructor(private reflector: Reflector) {}
	canActivate(context: ExecutionContext): boolean {
		const data = this.reflector.getAllAndOverride<{ roles: Roles[]; }>(
			'roles',
			[context.getHandler(), context.getClass()],
		);

		if (!data?.roles) {
			return true;
		}

		const user = context.switchToHttp().getRequest();
		const resultRole = data?.roles?.some((role) => user?.role == role);

		if (!resultRole) {
			return false;
		}

		return true;
	}
}
