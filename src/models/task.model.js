import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConfig.js";

export const Task = sequelize.define("task", {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true, // indicamos que es el primary key
        autoIncrement: true // y que su valor sera incremental
    },
    name: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps : false // estas son las propiedades de "auditoria" que usabamos en .net para saber si se hizo algun cambio en la tabla
    //como el createdAt y eso
})