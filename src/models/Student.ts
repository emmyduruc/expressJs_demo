import mongoose, { Document } from "mongoose";

type StudentDocument = Document & {
  firstName: string;
  lastName: string;
  classes: string[];
};

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

const ClassModel = mongoose.model<StudentDocument>("Student", studentSchema);

export default ClassModel;
