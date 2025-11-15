import { Router } from "express";
const router = Router();

import { getTasks, getTaskById, createTask, deleteTask } from "../controllers/task.controller.js";
import { updateProject } from "../controllers/project.controller.js";

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateProject);
router.delete("/:id", deleteTask);

export default router;