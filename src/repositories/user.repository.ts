import prisma from '../config/database/prisma';
import { User } from '@prisma/client';

export class UserRepository {
  public async findAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  public async findUserById(userId: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id: userId },
    });
  }

  public async createUser(data: { name: string, email: string, password: string }): Promise<User> {
    return prisma.user.create({
      data,
    });
  }
}
