import { Router } from "express";
const router = Router();
import { getProjects, getProjectTasks, createProject, updateProject, deleteProject, getProjectById} from "../controllers/project.controller.js";

router.get("/", getProjects);

router.get("/:id", getProjectById);
router.post("/create", createProject);
router.put("/update/:id", updateProject);
router.delete("/delete/:id", deleteProject);

router.get("/:id/tasks", getProjectTasks);

export default router;
