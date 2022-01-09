const mongoose = require("mongoose");

const ecoSchema = new mongoose.Schema({
  code: {
    type: String,
    require: true,
  },
  opening: {
    type: String,
    require: true,
  },
  move: {
    type: String,
  },
});

module.exports = mongoose.model("Eco", ecoSchema);
