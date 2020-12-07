const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  idAtividade: {
    type: String,
    required: false,
  },
  idProjeto: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Evento", EventoSchema);
