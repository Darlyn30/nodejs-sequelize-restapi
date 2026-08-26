import { Sequelize } from "sequelize";
//process.loadEnvFile(); //para poder traer las variables de entorno de mi .env

export const sequelize = new Sequelize(process.env.DB_URL { //db, user, pass -> vendran del .env
  //host: 'localhost'
  dialect: 'mysql'
});
