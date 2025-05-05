import { Test, TestingModule } from '@nestjs/testing';
import { OrgUserService } from './org-user.service';

describe('OrgUserService', () => {
  let service: OrgUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgUserService],
    }).compile();

    service = module.get<OrgUserService>(OrgUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
