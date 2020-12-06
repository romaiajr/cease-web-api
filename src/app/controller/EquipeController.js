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
  async remove(req, res) {
    const data = await Equipe.deleteOne({ _id: req.body._id });
    return res.json(data);
  }
}

module.exports = new EquipeController();
