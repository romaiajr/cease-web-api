const mongoose = require("mongoose");

const ProjetoSchema = new mongoose.Schema({
  tabela: {
    type: Boolean,
    required: false,
  },
  fields: {
    type: Array,
    required: false,
  },
  labels: {
    type: Array,
    required: false,
  },
  fotos: {
    type: Boolean,
    required: false,
  },
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  orientador: {
    type: String,
    required: false,
  },
  bolsista: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Projeto", ProjetoSchema);
