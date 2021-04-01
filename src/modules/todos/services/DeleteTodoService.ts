import AppError from 'src/shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import TodosRepository from '../typeorm/repositories/TodosRepository';

interface IRequest {
  id: string;
  user_id: string;
}

export default class DeleteTodoService {
  public async exec({ id, user_id }: IRequest): Promise<void> {
    const todosRepository = getCustomRepository(TodosRepository);

    const todo = await todosRepository.findById(id);

    if (!todo || todo.user_id != user_id) {
      throw new AppError('Todo not found');
    }

    await todosRepository.remove(todo);
  }
}
