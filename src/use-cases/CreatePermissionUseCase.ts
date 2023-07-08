import { Permission } from "../entities/Permission";
import { PermissionRepository } from "../repositories";

type PermissionRequest = {
  name: string;
  description: string;
};

export class CreatePermissionUseCase {
  async execute({
    name,
    description,
  }: PermissionRequest): Promise<Permission | Error> {

    if (await PermissionRepository.findOneBy({ name })) {
      return new Error("Permission already exists");
    }

    const permission = PermissionRepository.create({ name, description });

    await PermissionRepository.save(permission);

    return permission;
  }
}