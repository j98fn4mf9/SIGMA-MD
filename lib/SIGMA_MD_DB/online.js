const mongoose = require("mongoose");
const WaSchema2 = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: "onlin" },
  presence2: { type: String, default: "false" },
});
const aonline = mongoose.model("Aonline", WaSchema2);
module.exports = { aonline};
