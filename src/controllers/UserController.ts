import { Request, Response } from "express";
import { CreateUserUseCase } from "../use-cases/CreateUserUseCase";

export class UserController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({ email, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}