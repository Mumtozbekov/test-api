import {Inject, Injectable} from "@nestjs/common";
import {Knex} from "knex";
import { CreateUserDto } from "src/modules/users/dtos/createUserDto";

@Injectable()
export class UsersRepo {
    constructor(@Inject('KnexConnection') private readonly knex: Knex) {}


    async getUserList() {
        return this.knex('users').select('*');
    }
    
    async getUserByUsername(username: string) {
        return this.knex('users').where('username',username).first();
    }

    async insertUser(payload: CreateUserDto){

        return this.knex('users')
        .insert({
                name:payload.name, 
                username: payload.username, 
                password: payload.password,
                role: payload.role
            }).returning('*')
    }
}
