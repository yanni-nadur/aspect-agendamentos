import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export class UserRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.repo.create(userData);
    await this.repo.save(user);
    return user;
  }

  async findById(id: number): Promise<User | null> {
    return this.repo.findOneBy({ id });
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }
}