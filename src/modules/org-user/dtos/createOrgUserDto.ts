import { ApiProperty } from '@nestjs/swagger';

export class CreateOrgUserDto {
  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: 1 })
  org_id: number;

  @ApiProperty({ example: 2 })
  role: number;
}
