const Equipe = require("../model/Equipe");

class EquipeController {
  async store(req, res) {
    const data = await Equipe.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Equipe.find({});
    return res.json(data);
  }
  async remove(req, res, id) {
    const data = await Equipe.remove({ _id: id });
    return res.json(data);
  }
}

module.exports = new EquipeController();
