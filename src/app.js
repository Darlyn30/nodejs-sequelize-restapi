import express from "express";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

export default app;