import { Test, TestingModule } from '@nestjs/testing';
import { OrgUserController } from './org-user.controller';

describe('OrgUserController', () => {
  let controller: OrgUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgUserController],
    }).compile();

    controller = module.get<OrgUserController>(OrgUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
