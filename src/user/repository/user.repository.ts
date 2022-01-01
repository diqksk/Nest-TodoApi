import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUser(userId: number): Promise<User> {
    const user = await this.findOne(userId);

    return user;
  }
}
