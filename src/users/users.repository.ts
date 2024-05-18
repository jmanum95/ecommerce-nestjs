import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users = [
    {
      id: 1,
      email: 'user1@example.com',
      name: 'John Doe',
      password: 'password123',
      address: '123 Main St',
      phone: '+1234567890',
      country: 'USA',
      city: 'New York',
    },
    {
      id: 2,
      email: 'user2@example.com',
      name: 'Jane Smith',
      password: 'password456',
      address: '456 Elm St',
      phone: '+0987654321',
      country: 'Canada',
      city: 'Toronto',
    },
    {
      id: 3,
      email: 'user3@example.com',
      name: 'Alice Johnson',
      password: 'password789',
      address: '789 Oak St',
      phone: '+1122334455',
    },
    {
      id: 4,
      email: 'user4@example.com',
      name: 'Bob Brown',
      password: 'password101',
      address: '101 Pine St',
      phone: '+6677889900',
      country: 'UK',
      city: 'London',
    },
    {
      id: 5,
      email: 'user5@example.com',
      name: 'Charlie Davis',
      password: 'password202',
      address: '202 Cedar St',
      phone: '+5566778899',
      country: 'Australia',
      city: 'Sydney',
    },
    {
      id: 6,
      email: 'user6@example.com',
      name: 'Emily White',
      password: 'password303',
      address: '303 Birch St',
      phone: '+4455667788',
    },
    {
      id: 7,
      email: 'user7@example.com',
      name: 'David Harris',
      password: 'password404',
      address: '404 Maple St',
      phone: '+3344556677',
      country: 'Germany',
      city: 'Berlin',
    },
    {
      id: 8,
      email: 'user8@example.com',
      name: 'Fiona Clark',
      password: 'password505',
      address: '505 Spruce St',
      phone: '+2233445566',
    },
    {
      id: 9,
      email: 'user9@example.com',
      name: 'George Lewis',
      password: 'password606',
      address: '606 Willow St',
      phone: '+1122334466',
      country: 'France',
      city: 'Paris',
    },
    {
      id: 10,
      email: 'user10@example.com',
      name: 'Hannah Walker',
      password: 'password707',
      address: '707 Ash St',
      phone: '+9988776655',
    },
  ];

  async getAllUsers() {
    return this.users.map((user) => {
      delete user.password;
      return user;
    });
  }

  async getOneUser(id: number) {
    return this.users.find((user) => {
      delete user.password;
      return user.id === id;
    });
  }

  async createUser(user: any) {
    this.users.push({ id: this.users.length + 10, ...user });
    return user;
  }

  async updateUser(id: number, user: any) {
    const index = this.users.findIndex((u) => u.id === id);
    this.users[index] = { ...this.users[index], ...user };
    return user;
  }

  async deleteUser(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    this.users.splice(index, 1);
    return id;
  }
}
