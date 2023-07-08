import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SessionController } from "./controllers/SessionController";


const routes = Router();

routes.post("/users", new UserController().create);

routes.post("/login", new SessionController().create);

routes.get('/', (req, res) => {
    res.send('Hello World!');
});
  
export { routes };