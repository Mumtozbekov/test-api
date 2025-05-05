import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 1 })
  project_id: number;

  @ApiProperty({ example: new Date().toDateString() })
  due_date: Date;

  @ApiProperty({ example: 3 })
  worker_user_id: number;
}
