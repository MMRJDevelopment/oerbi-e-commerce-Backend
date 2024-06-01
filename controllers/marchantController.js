const { ObjectId } = require("mongodb");
const marchantList = require("../models/marchantSchema");
const UserList = require("../models/userSchema");

async function marchantController(req, res) {
  const {
    storename,
    officialemail,
    officialphone,
    address,
    owner,
    product,
    creted,
    update,
  } = req.body;

  const existingMarchant = await marchantList.find({ storename });
  if (existingMarchant.length > 0) {
    return res.json({ error: "Marchant name used" });
  }
  const storeList = marchantList({
    storename,
    officialemail,
    officialphone,
    address,
    owner,
    product,
    creted,
    update,
  });
  storeList.save();

  const updateMacrhantrole = await UserList.findByIdAndUpdate(
    { _id: owner },
    { role: "marchant" },
    { new: true }
  );

  res.json({ success: "congratulations.your aer a be came marchant" });
}
module.exports = marchantController;
