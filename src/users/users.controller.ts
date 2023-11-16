import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUser(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  addUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }
}
