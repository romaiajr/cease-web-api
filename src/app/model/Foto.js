const mongoose = require("mongoose");

const FotoSchema = new mongoose.Schema({
  legenda: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  linkExterno: {
    type: String,
    required: false,
  },
  idEvento: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Foto", FotoSchema);
