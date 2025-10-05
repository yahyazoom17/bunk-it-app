import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    department: { type: String, required: false },
    year: { type: Number, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
