import { Request, Response } from 'express';
import { UserService } from '../services/user.service'; 

const userService = new UserService();

export class UserController {
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
      res.status(400).json({ error: 'ID de usuario inválido' });
      return;
    }

    try {
      const user = await userService.getUserById(userId);
      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    try {
      const newUser = await userService.createUser({ name, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  }
}
