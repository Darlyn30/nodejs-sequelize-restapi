import { Sequelize } from "sequelize";
process.loadEnvFile(); //para poder traer las variables de entorno de mi .env

// En Railway ya tienes la variable MYSQL_URL lista
export const sequelize = new Sequelize("pruebasequelize", process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST
});
