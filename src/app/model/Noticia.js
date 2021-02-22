const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkExterno: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Noticia", NoticiaSchema);
