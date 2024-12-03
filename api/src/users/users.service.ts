import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from 'src/database/database.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UsersService {

  constructor(private readonly databaseService: DatabaseService, private jwtService: JwtService) {}

  async validateUser(loginUserDto: Prisma.UserCreateInput) {
    const {username, password} = loginUserDto
    const user = await this.databaseService.user.findUnique({ where: { username } })
    if (!user) {
      return {user: false, password: false}
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (isPasswordValid) {
      const register = this.jwtService.sign({id: user.id})
      return {userId: user.id, register}
    }
    else {
      return {user: true, password: false}
    }
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    const {username, password} = createUserDto

    const passwordHash = await bcrypt.hash(password, 10)

    // Create the user
    const createdUser = await this.databaseService.user.create({ data: { username: username, password: passwordHash } })



    if(!createdUser) {
      return new Error('User not created')
    }
    else {
      const register = this.jwtService.sign({id: createdUser.id})
      return {userId: createdUser.id, register}
    }

  }

  findAll() {
    return this.databaseService.user.findMany();
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.databaseService.user.delete({ where: { id } });
  }
}