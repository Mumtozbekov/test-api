import { Module } from '@nestjs/common';
import { OrgUserController } from './org-user.controller';
import { OrgUserService } from './org-user.service';
import { OrgUserRepo } from './org-user.repo';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [OrgUserController],
  providers: [OrgUserService, OrgUserRepo],
})
export class OrgUserModule {}
