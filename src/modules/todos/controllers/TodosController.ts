import { Request, Response } from 'express';
import CreateTodoService from '../services/CreateTodoService';
import UpdateTodoService from '../services/UpdateTodoService';
import ListTodosService from '../services/ListTodosService';
import DeleteTodoService from '../services/DeleteTodoService';
import { classToClass } from 'class-transformer';

export default class TodosController {
  public async create(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { title, description, deadline } = req.body;

    const createTodo = new CreateTodoService();

    const todo = await createTodo.exec({
      user_id,
      title,
      description,
      deadline,
    });

    return res.json(classToClass(todo));
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user_id = req.user.id;
    const { title, description, deadline } = req.body;

    const updateTodo = new UpdateTodoService();

    const todo = await updateTodo.exec({
      id,
      user_id,
      title,
      description,
      deadline,
    });

    return res.json(classToClass(todo));
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const listTodos = new ListTodosService();

    const todo = await listTodos.exec({
      user_id,
    });

    return res.json(classToClass(todo));
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user_id = req.user.id;

    const deleteTodo = new DeleteTodoService();

    await deleteTodo.exec({
      id,
      user_id,
    });

    return res.json({});
  }
}
