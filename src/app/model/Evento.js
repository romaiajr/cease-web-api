const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  idAtividade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Evento", EventoSchema);
