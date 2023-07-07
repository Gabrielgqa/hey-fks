import path from 'path';
import { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSOWRD,
    database: process.env.DB_DATABASE,
    port: 5432
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
};

export default config;