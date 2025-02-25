import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email } = req.body;

            if (!name || !email) {
                return res.status(400).json({ error: "Nome e e-mail são obrigatórios." });
            }

            const user = await this.userService.createUser(name, email);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.listUsers();
            return res.status(200).json(users);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            return res.status(500).json({ error: "Erro interno ao buscar usuários." });
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(Number(id));
    
            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado." });
            }
    
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuário." });
        }
    }
}
