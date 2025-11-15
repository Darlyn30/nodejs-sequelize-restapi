import { Project } from "../models/project.model.js";
import { Task } from "../models/task.model.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll(); // esto es el equivalente a "toList()" de EF Core
        res.json(projects);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const createProject = async (req, res) => {
    const {name, priority, description} = req.body; // recordando que el id es autogenerado por sql

    try {
        const newProject = await Project.create({
            name,
            priority,
            description
        })
        //le pasamos el body, que en un proyecto real, viene de un DTO, el servicio

        return res.send(newProject);
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}


export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByPk(id);

        // const project = await Project.findOne({
        //     where : {
        //         id : id
        //     },
        // });
        //en el caso de findOne, como menciono, puedes pasarle, los argumentos que guestes, qe quieres que busque

        if(project === null)
            return res.status(404).json({message : "No se encontro dicho proyecto"});

        res.json(project);   
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}


export const updateProject = async(req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    try {
        const project = await Project.findByPk(id); // le pasamos el primary key, tambien esta la opcion de findOne pero esta es con cualquier propiedad
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();

        return res.json(project);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

export const deleteProject = async(req, res) => {
    const { id } = req.params;

    try {
        await Project.destroy({ // este metodo busca el id, lo valida, y despues lo elimina
            //no tenemos que hacerlo manualmente
            where: {
                id
        }
    });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

//este metodo lo que hace es buscar tareas relacionadas a un proyecto, en este caso buscarla todas relacionadas a x proyecto
export const getProjectTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await Task.findAll({
            attributes: ["id", "projectId", "name", "done"],
            where: {projectId: id}
        });
        
        if(tasks === null){
            return res.status(404).json({message: "No hay tareas asociadas a este proyecto"});
        }
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
}


