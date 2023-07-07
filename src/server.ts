import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import * as dotenv from 'dotenv';
import { AppDataSource } from "./database/index";
import "./database";

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);

AppDataSource.initialize().then(async () => {
    app.listen(3000, () => console.log("Server is running"));
}).catch(error => console.log(error))