const mongoose = require("mongoose");

const AtividadeComplementarSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model(
  "AtividadeComplementar",
  AtividadeComplementarSchema
);
