import express from "express";
import projectRoutes from "./routes/project.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

app.listen(3001, async() => {
  try {
    await sequelize.sync({force: false});
    console.log("Server on port 3000");
  } catch(error) {
    console.error('Unable to connect to the database:', error);
  }
});

// export default app;