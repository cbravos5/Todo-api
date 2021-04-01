import { getCustomRepository } from 'typeorm';
import TodosRepository from '../typeorm/repositories/TodosRepository';

interface IRequest {
  id: string;
}

export default class DeleteTodoService {
  public async exec({ id }: IRequest): Promise<void> {
    const todosRepository = getCustomRepository(TodosRepository);

    const todo = await todosRepository.findById(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    await todosRepository.remove(todo);
  }
}
