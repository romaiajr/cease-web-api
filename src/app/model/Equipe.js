const mongoose = require("mongoose");

const EquipeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  lattes: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Equipe", EquipeSchema);
