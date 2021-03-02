const mongoose = require("mongoose");

const ProjetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  projeto_vinculado: {
    type: String,
    required: true,
  },
  orientador: {
    type: String,
    required: true,
  },
  bolsista: {
    type: String,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Projeto", ProjetoSchema);
