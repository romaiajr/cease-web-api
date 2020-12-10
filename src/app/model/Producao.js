const mongoose = require("mongoose");

const ProducaoSchema = new mongoose.Schema(
  {
    projetoId: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("Producao", ProducaoSchema);
