import { Inject, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { UsersRepo } from '../users/users.repo';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    @Inject() repo: UsersRepo;
   constructor(readonly jwt:JwtService){}

    async validateUser({username, password}: AuthPayloadDto){
        
        const user = await this.repo.getUserByUsername(username);
        if(!user) return null;
console.log(process.env.JWT_SECRET);

        if(user.password === password)
            return this.jwt.signAsync(user,{secret: process.env.JWT_SECRET});

    }
}
