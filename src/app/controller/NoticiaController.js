const Noticia = require("../model/Noticia");

class NoticiaController {
  async store(req, res) {
    const data = await Noticia.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Noticia.find();
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Noticia.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new NoticiaController();
