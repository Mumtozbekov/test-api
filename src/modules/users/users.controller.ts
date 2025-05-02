import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/modules/users/dtos/createUserDto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) {}
    @Get('/list')
    users(){
        return this.service.getUsersList()
    }

    @Post('createUser')
   
    async createUser(@Body() payload: CreateUserDto){
        
        console.log(payload);
        
        return this.service.insertUser(payload);
        
      
    }
}
