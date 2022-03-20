const mongoose = require("mongoose");
const { isEmail } = require("validator");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    gender: { type: String, require: true },
    dob: { type: String, required: true },
    fatherName: { type: String },
    motherName: { type: String },
    religion: { type: String },
    fatherOccupation: { type: String, trim: true },
    email: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
      validate: [isEmail],
    },
    clas: { type: String },
    address: { type: String },
    phone: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("student", studentSchema);
module.exports = StudentModel;
