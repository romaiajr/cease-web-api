const mongoose = require("mongoose");

const LeituraSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Leitura", LeituraSchema);
