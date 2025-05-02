import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepo } from '../users/users.repo';

@Module({
  controllers: [AuthController],
  providers: [AuthService,UsersRepo,JwtService]
})
export class AuthModule {}
