const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API  is running");
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server starting at port ${PORT}`));
