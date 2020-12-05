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
  async remove(req, res, id) {
    const data = await Capitulo.remove({ _id: id });
    return data;
  }
}

module.exports = new CapituloController();
