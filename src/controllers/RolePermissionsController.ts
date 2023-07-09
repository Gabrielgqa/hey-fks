import { Request, Response } from "express";
import { CreateRolePermissionsUseCase } from "../use-cases/CreateRolePermissionsUseCase";

export class RolePermissionsController {
  async create(request: Request, response: Response) {
    const { roleId } = request.params;
    const { permissions } = request.body;

    const createRolePermissionsUseCase = new CreateRolePermissionsUseCase();

    const result = await createRolePermissionsUseCase.execute({
      roleId,
      permissions,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}