import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(name: string, email: string): Promise<User> {
        if (!name || !email) {
            throw new Error("Nome e email são obrigatórios.");
        }

        return this.userRepository.create({ name, email });
    }

    async getUserById(id: number): Promise<User | null> {
        const user = await this.userRepository.findById(id);
        
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        return user;
    }

    async listUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}

