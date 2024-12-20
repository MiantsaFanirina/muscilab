import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() registerUserDto: Prisma.UserCreateInput) {
    let { firstName, lastName, email } = registerUserDto;


    const data = { firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase(), email: email.toLowerCase(), ...registerUserDto };

    const userWithPassword = await this.usersService.create(data);
    
    
    if(!userWithPassword) {
      return {message: 'bad credentials'};
    }

    const { password, ...user } = userWithPassword;

    // Generate a JWT
    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return {
      token: token
    };
  }

  @Post('signIn')
  async signIn(@Body() {email, password} : SignInDto) {

    // make the mail lower case
    const emailLowerCase = email.toLowerCase();
    
    // validate the user in the user service
    const isValid = await this.usersService.signIn(emailLowerCase, password);
    
    // if the user is not validated return is Valild
    if(!isValid.user) {
      return isValid;
    }

    // if user is validated then sign the user
    // Generate a JWT
    const payload = {id: isValid.user.id, email: isValid.user.id};
    const token = this.jwtService.sign(payload);
    
    return {
      token: token
    };


  }
  
}
