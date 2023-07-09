import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SessionController } from "./controllers/SessionController";
import { PermissionController } from "./controllers/PermissionController";
import { RoleController } from "./controllers/RoleController";
import { RolePermissionsController } from "./controllers/RolePermissionsController";
import { isAuthenticated, is } from "./middlewares/index";


const routes = Router();

routes.post("/users", new UserController().create);

routes.post("/login", new SessionController().create);

routes.post(
    "/permissions",
    isAuthenticated(),
    new PermissionController().create
);

routes.post(
    "/roles",
    isAuthenticated(),
    is(["admin"]),
    new RoleController().create
);

routes.post("/roles/:roleId", new RolePermissionsController().create);
  
export { routes };