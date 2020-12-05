const AtividadeComplementar = require("../model/AtividadeComplementar");

class AtividadeComplementarController {
  async store(req, res) {
    const data = await AtividadeComplementar.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await AtividadeComplementar.find({});
    return res.json(data);
  }
  async remove(req, res, id) {
    const data = await AtividadeComplementar.remove({ _id: id });
    return data;
  }
}

module.exports = new AtividadeComplementarController();
