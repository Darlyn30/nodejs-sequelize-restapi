import { Sequelize } from "sequelize";
//process.loadEnvFile(); //para poder traer las variables de entorno de mi .env

// En Railway ya tienes la variable MYSQL_URL lista
export const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "mysql"
});
