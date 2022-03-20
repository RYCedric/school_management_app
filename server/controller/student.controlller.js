const StudentModel = require("../models/student.model");

module.exports.add = async (req, res) => {
  const {
    name,
    gender,
    picture,
    dob,
    fatherName,
    motherName,
    religion,
    fatherOccupation,
    email,
    address,
    phone,
    clas,
  } = req.body;

  try {
    const student = await StudentModel.create({
      name,
      gender,
      picture,
      dob,
      fatherName,
      motherName,
      religion,
      fatherOccupation,
      email,
      address,
      phone,
      clas,
    });
    res.status(201).json({ student: student._id });
  } catch (error) {
    res.status(200).send({ error });
  }
};
