import { UserRepository } from '../repositories/user.repository';
import { User } from '@prisma/client';

const userRepository = new UserRepository();

export class UserService {
  public async getAllUsers(): Promise<User[]> {
    return userRepository.findAllUsers();
  }

  public async getUserById(userId: number): Promise<User | null> {
    return userRepository.findUserById(userId);
  }

  public async createUser(data: { name: string, email: string, password: string }): Promise<User> {
    return userRepository.createUser(data);
  }
}
