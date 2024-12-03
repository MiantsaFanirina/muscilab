import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {DatabaseModule} from "../database/database.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
      DatabaseModule,
      JwtModule.register(
          {
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '1d'}
          }
      )
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
