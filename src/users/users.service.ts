import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.createUser(createUserDto);
  }

  async findAll() {
    return await this.usersRepository.getAllUsers();
  }

  async findOne(id: number) {
    return await this.usersRepository.getOneUser(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.updateUser(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.usersRepository.deleteUser(id);
  }
}
