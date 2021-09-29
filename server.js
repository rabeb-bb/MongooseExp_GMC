console.clear();
//importing express
const express = require("express");

//importing the function that connects to the DB
const connectDB = require("./config/connectDB");

//creating the app instance
const app = express();

//importing the env
require("dotenv").config();

//connect to the database
connectDB();

// middleware
app.use(express.json());
app.use("/api/person", require("./router/Person"));
// app.get("/", (req, res) => {
//   res.send("hi");
// });

//port
const PORT = process.env.PORT;

//creating server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running on", PORT)
);
