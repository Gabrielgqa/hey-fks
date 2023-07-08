import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { User, Role, Permission } from "../entities";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSOWRD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Role, Permission],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
})