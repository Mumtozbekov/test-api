import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dtos/createOrganizationDto';
import { OrganizationRepo } from './organization.repo';
import { ICurrentUser } from 'src/interfaces/currentUser';

@Injectable()
export class OrganizationService {
  @Inject() private repo: OrganizationRepo;

  createOrganization(user: ICurrentUser, payload: CreateOrganizationDto) {
    return this.repo.insert({
      name: payload.name,
      created_by: user.id,
    });
  }
}
