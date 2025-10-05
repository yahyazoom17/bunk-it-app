import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  isBunkable: { type: Boolean, default: false },
  totalAttended: { type: Number, default: 0 },
  totalClasses: { type: Number, default: 0 },
  isPresent: { type: Boolean, default: false },
  isAbsent: { type: Boolean, default: false },
  noClass: { type: Boolean, default: false },
  classDays: [{ type: String }],
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
});

export default mongoose.model("Class", classSchema);
