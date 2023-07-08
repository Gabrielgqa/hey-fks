import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { Permission } from "../entities/Permission";
import { AppDataSource } from "../database/index";

export const UserRepository = () => {
  return AppDataSource.getRepository(User);
};

export const RoleRepository = () => {
  return AppDataSource.getRepository(Role);
};

export const PermissionRepository = () => {
  return AppDataSource.getRepository(Permission);
};