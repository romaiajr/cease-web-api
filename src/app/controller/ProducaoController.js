const Producao = require("../model/Producao");

class ProducaoController {
  async store(req, res) {
    const data = await Producao.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Producao.find({ projetoId: req.body.data });
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Producao.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new ProducaoController();
