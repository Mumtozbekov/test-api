import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty({ example: 'Apple' })
  name: string;

  //   @ApiProperty({ example: '1' })
  //   created_by: number;
}
