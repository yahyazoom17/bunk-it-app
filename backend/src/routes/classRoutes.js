import express from "express";
import {
  addClass,
  getAllClasses,
  getClassByDay,
  getClassById,
  getClassByStudentId,
} from "../controllers/classController.js";

const router = express.Router();

router.get("/", getAllClasses);
router.get("/:classId", getClassById);
router.get("/student/:studentId", getClassByStudentId);
router.get("/student/:studentId/:day", getClassByDay);
router.post("/add", addClass);

export default router;
