const mongoose = require("mongoose");

const IcSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  bolsista: {
    type: String,
    required: true,
  },
  orientador: {
    type: String,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ic", IcSchema);
