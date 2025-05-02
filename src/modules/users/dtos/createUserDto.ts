import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "src/modules/auth/enum/roles";

export class CreateUserDto{
    @ApiProperty({ example: 'John Doe' })
    name: string;

    @ApiProperty({ example: 'johndoe'})
    username: string;

    @ApiProperty({ example: 'StrongP@ss123' })
    password: string;

    @ApiProperty({ example: Roles.ORG_WORKER, enum: Roles})
    role: Roles;
}