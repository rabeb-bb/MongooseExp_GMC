getAllPeople = async (req, res) => {
  try {
    const peoplelist = await People.find();
    res.send({ peoplelist, msg: "found everyone" });
    console.log(peoplelist);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "can not get", error });
  }
};
