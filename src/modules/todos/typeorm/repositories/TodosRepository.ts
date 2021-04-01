import User from 'src/modules/users/typeorm/entities/Users';
import { EntityRepository, Repository } from 'typeorm';
import Todo from '../entities/Todos';

@EntityRepository(Todo)
export default class TodosRepository extends Repository<Todo> {
  public async findAllByUserId(user: User): Promise<Todo[]> {
    return await this.find({
      relations: ['user'],
      where: { user },
    });
  }

  public async findById(id: string): Promise<Todo | undefined> {
    return await this.findOne(id);
  }
}
