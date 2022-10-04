const express = require("express");
const dotenv = require("dotenv");

// Loaded Routers
const { authRouter } = require("./src/routes");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("ㅇㅇ");
});
