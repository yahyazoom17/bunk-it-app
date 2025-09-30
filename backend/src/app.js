import cors from "cors";
import express from "express";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// App routes here

export default app;
