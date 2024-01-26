const mongoose = require("mongoose");
const WaSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: "sigma_md" },
  presence: { type: String, default: "false" },
});
const atyping = mongoose.model("Atyping", WaSchema); 
module.exports = { atyping };
