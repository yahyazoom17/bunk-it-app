import express from "express";
import {
  addStudent,
  getAllStudents,
  getStudentById,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:userId", getStudentById);
router.post("/add", addStudent);

export default router;
