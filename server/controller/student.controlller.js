const StudentModel = require("../models/student.model");
const ObjectID = require("mongoose").Types.ObjectId;

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

module.exports.getAllStudents = async (req, res) => {
  const students = await StudentModel.find().select();
  res.status(200).json(students);
};

module.exports.studentInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  StudentModel.findById(req.params.id, (err, docs) => {
    !err ? res.send(docs) : console.log("ID unknow : " + req.params.id);
  }).select();
};

module.exports.updateStudent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  try {
    await StudentModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(500).send({ message: err });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
