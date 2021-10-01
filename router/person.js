const express = require("express");
const {
  addPerson,
  findPerson,
  findPersonId,
  updateData,
  deletePerson,
  getAllPeople,
  deleteByName,
  addPeople,
  findPersonFood,
  findThenUpdate,
  findFood,
} = require("../controllers/person.controllers");
const router = express.Router();

//create a new doc
// router.post("/", addPerson);

//create many docs
router.post("/", addPeople);

//find people
// router.get("/", getAllPeople);
// router.get("/:name", findPerson);

//find by _id
router.get("/:id", findPersonId);

//find by favorite favoriteFoods
// router.get("/:favoriteFoods", findPersonFood);
//find with helpers
router.get("/sorted/:favoriteFoods", findFood);

//update
// router.put("/:id", updateData);
router.put("/:name", findThenUpdate);

//delete
// router.delete("/:id", deletePerson);
router.delete("/:name", deleteByName);

module.exports = router;
