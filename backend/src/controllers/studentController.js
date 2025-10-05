import StudentModel from "../models/Student.js";

export const getAllStudents = async (_req, res) => {
  const students = await StudentModel.find();
  res.status(201).json(students);
};

export const addStudent = async (req, res) => {
  const newStudent = new StudentModel(req.body);
  await newStudent.save();
  res.status(201).json(newStudent);
};
