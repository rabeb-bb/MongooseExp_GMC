const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the data base successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
