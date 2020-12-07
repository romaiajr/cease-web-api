const Leitura = require("../model/Leitura");

class LeituraController {
  async store(req, res) {
    const data = await Leitura.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Leitura.find();
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Leitura.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new LeituraController();
