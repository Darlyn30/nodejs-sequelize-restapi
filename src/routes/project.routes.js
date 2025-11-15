import { Router } from "express";
const router = Router();
import { getProjects, getProjectTasks, createProject, updateProject, deleteProject, getProjectById} from "../controllers/project.controller.js";

router.get("/", getProjects);

router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

router.get("/:id/tasks", getProjectTasks);

export default router;