import { ApiProperty } from "@nestjs/swagger";

export class AuthPayloadDto{
    @ApiProperty({ example: 'johndoe'})
    username: string;
    @ApiProperty({ example: 'StrongP@ss123' })
    password: string;
}