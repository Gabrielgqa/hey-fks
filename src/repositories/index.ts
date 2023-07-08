import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { Permission } from "../entities/Permission";
import { AppDataSource } from "../database/index";

export const UserRepository = AppDataSource.getRepository(User);

export const RoleRepository = AppDataSource.getRepository(Role);

export const PermissionRepository = AppDataSource.getRepository(Permission);