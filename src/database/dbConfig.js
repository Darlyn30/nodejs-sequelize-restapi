import { Sequelize } from "sequelize";
process.loadEnvFile(); //para poder traer las variables de entorno de mi .env

export const sequelize = new Sequelize('pruebasequelize', process.env.DB_USER, process.env.DB_PASS, { //db, user, pass -> vendran del .env
  host: 'localhost',
  dialect: 'mysql'
});