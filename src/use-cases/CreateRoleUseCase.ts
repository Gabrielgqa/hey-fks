import { Role } from "../entities/Role";
import { RoleRepository } from "../repositories";

type RoleRequest = {
  name: string;
  description: string;
};

export class CreateRoleUseCase {
  async execute({ name, description }: RoleRequest): Promise<Role | Error> {
    if (await RoleRepository.findOneBy({ name })) {
      return new Error("Role already exists");
    }

    const role = RoleRepository.create({ name, description });

    await RoleRepository.save(role);

    return role;
  }
}