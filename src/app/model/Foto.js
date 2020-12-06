const mongoose = require("mongoose");

const FotoSchema = new mongoose.Schema({
  legenda: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  idEvento: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Foto", FotoSchema);
