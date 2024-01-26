const mongoose = require("mongoose");
const WaSchema1 = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: "record" },
  presence1: { type: String, default: "false" },
});
const arecording = mongoose.model("Arecording", WaSchema1);
module.exports = { arecording};
