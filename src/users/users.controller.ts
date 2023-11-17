import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Delete('/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.remove(id);
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return await this.usersService.updateUser(id, user);
  }
}
