import { EntityRepository, Repository } from 'typeorm';
import Todo from '../entities/Todos';

@EntityRepository(Todo)
export default class TodosRepository extends Repository<Todo> {
  public async findAllByUserId(user_id: string): Promise<Todo | undefined> {
    return await this.findOne({ relations: ['user_id'], where: user_id });
  }

  public async findById(id: string): Promise<Todo | undefined> {
    return await this.findOne(id);
  }
}
