const mongoose = require("mongoose");

const AtividadeComplementarSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "AtividadeComplementar",
  AtividadeComplementarSchema
);
