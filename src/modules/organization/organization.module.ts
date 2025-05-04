import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { OrganizationRepo } from './organization.repo';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationRepo],
})
export class OrganizationModule {}
