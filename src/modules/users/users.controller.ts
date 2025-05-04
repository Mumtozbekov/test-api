import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/modules/users/dtos/createUserDto';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get('/list')
  //   @UseGuards(AuthorizationGuard)
  //   @ApiBearerAuth('authorization')
  users() {
    return this.service.getUsersList();
  }

  @Post('createUser')
  async createUser(@Body() payload: CreateUserDto) {
    console.log(payload);

    return this.service.insertUser(payload);
  }
}
