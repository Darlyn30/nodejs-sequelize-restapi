import { Router } from "express";
const router = Router();
import { getProjects, getProjectTasks, createProject, updateProject, deleteProject, getProjectById} from "../controllers/project.controller.js";

router.post("/create", createProject);
router.put("/update/:id", updateProject);
router.delete("/delete/:id", deleteProject);
router.get("/:id/tasks", getProjectTasks);
router.get("/:id", getProjectById);
router.get("/", getProjects);


export default router;
