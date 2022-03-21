const express = require("express");
const studentRoutes = require("./routes/student.routes");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeader: ["sessionId"],
  methodes: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api/student", studentRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
