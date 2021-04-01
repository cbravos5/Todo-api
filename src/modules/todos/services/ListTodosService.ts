import UsersRepository from 'src/modules/users/typeorm/repositories/UsersRepository';
import AppError from 'src/shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Todo from '../typeorm/entities/Todos';
import TodosRepository from '../typeorm/repositories/TodosRepository';

interface IRequest {
  user_id: string;
}

export default class ListTodosService {
  public async exec({ user_id }: IRequest): Promise<Todo[]> {
    const todosRepository = getCustomRepository(TodosRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const todos = await todosRepository.findAllByUserId(user);

    return todos;
  }
}
