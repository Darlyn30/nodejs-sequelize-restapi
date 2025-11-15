import { Task } from "../models/task.model.js";
import { Project } from "../models/project.model.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const getTaskById = async (req, res) => {
    try {
        const  { id } = req.params;
        const task = Task.findByPk(id) //podemos usar tanto findByPk(Primary Key) o findOne, como vemos en el metodo de updateTask

        if(task === null)
            return res.status(404).json({message: "dicha tarea no existe"});

        return res.status(200).json(task);
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
}

export const createTask = async (req, res) => {
    const { id } = req.params;
    const { name, done, projectId } = req.body;
    try {
        const newTask = await Task.create({
            name,
            done,
            projectId,
        })

        const project = await Project.findByPk(id);
        if(project === null)
            return res.status(404).json({message: "el proyecto al que quiere ligar la tarea, no existe"})

        return res.status(200).json(newTask);
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
}


export const updateTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findOne({
            //aqui le decimos  que atributos va a buscar, puede ser que no querramos que devuelva el objeto completo
            attributes: ['name', 'projectId', 'done', 'id'],
            //y esta es la condicion. podemos hacer que busque ya sea por cualquier propiedad
            where: { id }
        })

        //seteamos lo que tenemos en el body
        task.set(req.body);
        //guardamos los datos que se editaron
        await task.save();

        //se lo servimos al cliente
        return res.status(201).json(task);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await Task.destroy(id);

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({error: message});
    }
}

