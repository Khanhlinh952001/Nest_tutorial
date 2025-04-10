import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUser();
  }

  @Get('count')
  countUsers() {
    return this.userService.userCount();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUser(+id);
  }

  @Post()
  async createUser(
    @Body()
    body: CreateUserDto,
  ) {
    body.password = await bcrypt.hash(body.password, 10);
    body.created_at = new Date();
    body.update_at = new Date();
    return this.userService.createUser(body);
  }

  @Patch(':id')
  updataUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    body.update_at = new Date();
    return this.userService.updateUser(+id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
