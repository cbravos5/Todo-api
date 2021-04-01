import AppError from 'src/shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Todo from '../typeorm/entities/Todos';
import TodosRepository from '../typeorm/repositories/TodosRepository';

interface IRequest {
  id: string;
  title: string;
  description?: string;
  deadline?: Date;
}

export default class UpdateTodoService {
  public async exec({
    id,
    title,
    description,
    deadline,
  }: IRequest): Promise<Todo> {
    const todosRepository = getCustomRepository(TodosRepository);

    const todo = await todosRepository.findById(id);

    if (!todo) {
      throw new AppError('Todo not found');
    }

    todo.title = title;

    if (description) {
      todo.description = description;
    }

    if (deadline) {
      todo.deadline = deadline;
    }

    await todosRepository.save(todo);

    return todo;
  }
}
