import { Request, Response } from "express";
import { CreatePermissionUseCase } from "../use-cases/CreatePermissionUseCase";

export class PermissionController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createPermissionUseCase = new CreatePermissionUseCase();

    const result = await createPermissionUseCase.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}