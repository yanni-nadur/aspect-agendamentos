import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";
import { ExamController } from "../controllers/ExamController";
import { AppointmentController } from "../controllers/AppointmentController";

const routes = Router();

const userController = new UserController();
const examController = new ExamController();
const appointmentController = new AppointmentController();

routes.post("/users", (req: Request, res: Response): Promise<any> => userController.create(req, res));
routes.get("/users/:id", (req: Request, res: Response): Promise<any> => userController.getById(req, res));
routes.get("/users", (req: Request, res: Response): Promise<any>  => userController.list(req, res));

routes.post("/exams", (req: Request, res: Response): Promise<any>  => examController.create(req, res));
routes.get("/exams/:id", (req: Request, res: Response): Promise<any> => examController.getById(req, res));
routes.get("/exams", (req: Request, res: Response): Promise<any>  => examController.list(req, res));

routes.post("/appointments", (req: Request, res: Response): Promise<any>  => appointmentController.create(req, res));
routes.get("/appointments/:id",(req: Request, res: Response): Promise<any> => appointmentController.getById(req, res));
routes.get("/appointments", (req: Request, res: Response): Promise<any>  => appointmentController.list(req, res));
routes.delete("/appointments/:id", (req: Request, res: Response): Promise<any> => appointmentController.delete(req, res));



export { routes };
