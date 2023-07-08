import { Request, Response } from "express";
import { CreateRoleUseCase } from "../use-cases/CreateRoleUseCase";

export class RoleController {
  async create(request: Request, response: Response) {
    const { name, description } = request.body;

    const createRoleUseCase = new CreateRoleUseCase();

    const result = await createRoleUseCase.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}