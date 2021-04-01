import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.exec({ name, email, password });

    return res.json(user);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const id = req.user.id;

    const showUserService = new ShowUserService();

    const user = await showUserService.exec({ id });

    return res.json(user);
  }
}
