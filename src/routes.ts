import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SessionController } from "./controllers/SessionController";
import { PermissionController } from "./controllers/PermissionController";
import { isAuthenticated } from "./middlewares/isAuthenticated";


const routes = Router();

routes.post("/users", new UserController().create);

routes.post("/login", new SessionController().create);

routes.post(
    "/permissions",
    isAuthenticated(),
    new PermissionController().handle
);
  
export { routes };