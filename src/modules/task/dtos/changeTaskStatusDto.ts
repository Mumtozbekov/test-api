import { ApiProperty } from '@nestjs/swagger';
import { TaskStatuses } from 'src/enum/taskStatuses';

export class ChangeTaskStatusDto {
  @ApiProperty({ example: 1 })
  task_id: number;

  @ApiProperty({
    example: TaskStatuses.IN_PROCESS,
    description: '1 = IN_PROCESS, 2 = DONE',
  })
  status: number;
}
