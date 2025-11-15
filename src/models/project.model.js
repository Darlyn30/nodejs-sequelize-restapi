import { DataTypes } from 'sequelize';
import { sequelize } from "../database/dbConfig.js"
import { Task } from "./task.model.js";

//con esto representamos, nuestra tabla y sus propiedades
export const Project = sequelize.define("projects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull : false
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    priority :{
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
})

//para hacer relaciones entre estas tablas

Project.hasMany(Task, {
    foreignKey: "projectId",
    sourceKey : "id"
})

Task.belongsTo(Project, {
    foreignKey: "projectId",
    targetKey : "id"
})