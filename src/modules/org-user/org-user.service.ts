import { Inject, Injectable } from '@nestjs/common';
import { CreateOrgUserDto } from './dtos/createOrgUserDto';
import { OrgUserRepo } from './org-user.repo';

@Injectable()
export class OrgUserService {
  @Inject() private repo: OrgUserRepo;

  createOrgUser(payload: CreateOrgUserDto) {
    return this.repo.insert(payload);
  }

  getUser(id: number) {
    return this.repo.getUser(id);
  }
}
