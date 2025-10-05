import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: false },
    department: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
