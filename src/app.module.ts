import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { KnexModule } from './knex/knex.module';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';




@Module({
  imports: [
    KnexModule,
    JwtModule.register({}),
    AuthModule,
    UsersModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
