import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  getAllUser() {
    return this.prisma.user.findMany();
  }
  getUser(id: number): Promise<any> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  createUser(body: CreateUserDto): Promise<any> {
    return this.prisma.user.create({ data: body });
  }

  updateUser(id: number, body: UpdateUserDto): Promise<any> {
    return this.prisma.user.update({ where: { id: id }, data: body });
  }

  deleteUser(id: number): Promise<any> {
    return this.prisma.user.delete({ where: { id } });
  }

  userCount(): Promise<number> {
    return this.prisma.user.count();
  }
}
