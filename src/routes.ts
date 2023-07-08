import { Router } from "express";
import { UserController } from "./controllers/UserController";

const routes = Router();

routes.post("/users", new UserController().create);

routes.get('/', (req, res) => {
    res.send('Hello World!');
});
  
export { routes };