const Capitulo = require("../model/Capitulo");

class CapituloController {
  async store(req, res) {
    const data = await Capitulo.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Capitulo.find({});
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Capitulo.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new CapituloController();
