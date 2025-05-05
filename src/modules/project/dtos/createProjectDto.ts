import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'X' })
  name: string;

  @ApiProperty({ example: 1 })
  org_id: number;
}
