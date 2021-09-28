const express = require("express");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running on", PORT)
);
