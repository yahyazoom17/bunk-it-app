import ClassModel from "../models/Class.js";

export const getAllClasses = async (_req, res) => {
  const classes = await ClassModel.find();
  res.json(classes);
};

export const getClassById = async (req, res) => {
  const classId = req.params.classId;
  const classes = await ClassModel.findById(classId);
  console.log(classes);
  res.json(classes);
};

export const getClassByStudentId = async (req, res) => {
  const studentId = req.params.studentId;
  const classes = await ClassModel.find({ studentId });
  res.json(classes);
};

export const getClassByDay = async (req, res) => {
  const studentId = req.params.studentId;
  const day = req.params.day;
  const studentClasses = await ClassModel.find({ studentId });
  const response = studentClasses.filter((cls) =>
    cls.classDays.includes(day.toLowerCase())
  );
  res.json(response);
};

export const addClass = async (req, res) => {
  const newClass = new ClassModel(req.body);
  await newClass.save();
  res.status(201).json(newClass);
};
