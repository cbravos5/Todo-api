import UsersRepository from 'src/modules/users/typeorm/repositories/UsersRepository';
import AppError from 'src/shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Todo from '../typeorm/entities/Todos';
import TodosRepository from '../typeorm/repositories/TodosRepository';

interface IRequest {
  user_id: string;
  title: string;
  description?: string;
  deadline?: string;
}

export default class CreateTodoService {
  public async exec({
    user_id,
    title,
    description,
    deadline,
  }: IRequest): Promise<Todo | undefined> {
    const todosRepository = getCustomRepository(TodosRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const todo = todosRepository.create({
      user,
      title,
      description,
      deadline,
    });

    await todosRepository.save(todo);

    return todo;
  }
}
