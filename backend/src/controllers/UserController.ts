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
            const user = await this.userService.createUser(name, email);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async list(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.listUsers();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuários." });
        }
    }
}