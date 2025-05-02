import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationGuard implements CanActivate {
	@Inject() private readonly jwtService: JwtService;

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		let tokenId = request.headers.authorization;
		if (!tokenId) {
			throw new UnauthorizedException();
		}
		try {
			await this.jwtService.verifyAsync(tokenId, {
				secret: process.env.JWT_SECRET,
			});
		} catch (e) {
			throw new UnauthorizedException();
		}

		const decodeToken: any = await this.jwtService.decode(tokenId);
		if (!decodeToken) {
			throw new UnauthorizedException();
		}

		request.user = { ...decodeToken, access_token: tokenId };

		return true;
	}
}
