import { Inject, Injectable } from '@nestjs/common';
import { UsersRepo } from './users.repo';
import { CreateUserDto } from 'src/modules/users/dtos/createUserDto';

@Injectable()
export class UsersService {

    @Inject() repo: UsersRepo;

    async getUsersList() {
        const data = await this.repo.getUserList()
        return {data}
    }

    async insertUser(payload: CreateUserDto){
        const user = (await this.repo.insertUser(payload)).shift();

        console.log(user);
        
        return {
            id: user.id
        }

    }

}
