const express = require("express");
const studentRoutes = require("./routes/student.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/student", studentRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
