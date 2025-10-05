import cors from "cors";
import express from "express";
import classRoutes from "./routes/classRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// App routes here
app.use("/class", classRoutes);
app.use("/student", studentRoutes);

export default app;
