let mongoose = require("mongoose");
const { Schema } = mongoose;
//create person prototype using schema
let personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = mongoose.model("Person", personSchema);
