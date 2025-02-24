import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string): Promise<User> {
        return this.userRepository.create({ name, email });
    }

    async getUserById(id: number): Promise<User | null> {
        return this.userRepository.findById(id);
    }

    async listUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}