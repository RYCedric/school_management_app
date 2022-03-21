const router = require("express").Router();
const studentController = require("../controller/student.controlller");

router.post("/add", studentController.add);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.studentInfo);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
