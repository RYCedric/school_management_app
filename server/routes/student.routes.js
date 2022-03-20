const router = require("express").Router();
const studentController = require("../controller/student.controlller");

router.post("/add", studentController.add);

module.exports = router;
