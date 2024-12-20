import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
  ) {}

  // creating user
  async create(data: Prisma.UserCreateInput) {
    
    // get the user data
    const {firstName, lastName, email, password, description, interest} = data;

    // hashing the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // create the user
    const user = await this.databaseService.user.create({
      data: {
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: email.toLowerCase(),
        password: hashedPassword,
        description,
        interest,
      },
    });

    return user;
  }

  
  
  async signIn (email: string, password: string) {
    const user = await this.databaseService.user.findUnique({
      where: {email: email.toLowerCase()}
    });

    if(!user) {
      return {email: false, password: false};
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
      return {email: true, password: false};
    } 

    return {email: true, password: true, user};

  }

  // get user 
  async findOne(id: number) {
    const userWithPassword = await this.databaseService.user.findUnique({
      where: {id: id}
    });

    const {password, ...user} = userWithPassword;
  }

}
