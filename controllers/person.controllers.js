const Person = require("../models/Person");

exports.addPerson = async (req, res) => {
  try {
    const newPerson = new Person({ ...req.body });
    await newPerson.save();
    res.send({ msg: "person added", newPerson });
  } catch (err) {
    res.status(400).send({ msg: "person not saved", err });
  }
};

//add one person
exports.addPerson = async (req, res) => {
  try {
    const newPerson = new Person({ ...req.body });
    await newPerson.save();
    res.send({ msg: "person added", newPerson });
  } catch (err) {
    res.status(400).send({ msg: "person not saved", err });
  }
};

//add many people
exports.addPeople = async (req, res) => {
  try {
    const newPeople = Person.create({ ...req.body });
    res.send({ msg: "people added", newPeople });
  } catch (err) {
    res.status(400).send({ msg: "people are not added", err });
  }
};

//find all People
exports.getAllPeople = async (req, res) => {
  try {
    const peoplelist = await Person.find();
    res.send({ peoplelist, msg: "found everyone" });
    console.log(peoplelist);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "can not get", error });
  }
};

//find people
exports.findPerson = async (req, res) => {
  try {
    const { name } = req.params;
    const namedPeople = Person.find({ name: name });
    res.send({ msg: "people found", namedPeople });
  } catch (err) {
    res.status(400).send({ msg: "people not found", err });
    console.log(req.params);
  }
};

//find person by id

exports.findPersonId = async (req, res) => {
  try {
    const { id } = req.params;
    const findPerson = await Person.findById(id);
    res.send({ msg: "found the person", findPerson });
    console.log(findPerson);
  } catch (error) {
    res.status(400).send({ msg: "can not get the person" });
    console.log(req.params);
  }
};
// find by favoriteFood
exports.findPersonFood = async (req, res) => {
  try {
    const { favoriteFoods } = req.params;
    const findPerson = await Person.find({
      favoriteFoods: { $all: [favoriteFoods] },
    });
    res.send({ msg: "found the person", findPerson });
    console.log(findPerson);
  } catch (error) {
    res.status(400).send({ msg: "can not get the person" });
    console.log(req.params);
  }
};

//update
exports.updateData = async (req, res) => {
  try {
    const { id } = req.params;
    await Person.updateOne({ _id: id }, { ...req.body }, { new: true });
    res.send({ msg: "updated succ" });
  } catch (err) {
    res.status(400).send({ msg: "person not updated", err });
  }
};
exports.findThenUpdate = async (req, res) => {
  try {
    const { name } = req.params;
    await Person.findOneAndUpdate(
      { name: name },
      { ...req.body },
      { new: true }
    );
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "person not updated", err });
  }
};

//delete by id
exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Person.deleteOne({ _id: id });
    res.send({ msg: "person deleted", result });
  } catch (error) {
    res.status(400).send({ msg: "could not delete", error });
  }
};
exports.deleteByName = async (req, res) => {
  try {
    const { name } = req.params;
    let result = await Person.deleteMany({ name: name });
    res.send({ msg: `${name} deleted successfully` });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
};

//find helpers
exports.findFood = async (req, res) => {
  try {
    const { favoriteFoods } = req.params;
    const findPerson = await Person.find({
      favoriteFoods: { $all: [favoriteFoods] },
    })
      .sort({ name: "asc" })
      .limit(5)
      .select("-favoriteFoods")
      .exec();
    res.send({ msg: "found the person", findPerson });
    console.log(findPerson);
  } catch (error) {
    res.status(400).send({ msg: "can not get the person" });
    console.log(req.params);
  }
};
