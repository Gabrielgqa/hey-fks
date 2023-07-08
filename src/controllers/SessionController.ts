import { Request, Response } from "express";
import { CreateSessionUseCase } from "../use-cases/CreateSessionUseCase";

export class SessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const sessionService = new CreateSessionUseCase();
    const result = await sessionService.execute({ email, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}