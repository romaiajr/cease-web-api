const Tcc = require("../model/Tcc");

class TccController {
  async store(req, res) {
    const data = await Tcc.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Tcc.find();
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Tcc.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new TccController();
