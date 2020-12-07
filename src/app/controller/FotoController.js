const Foto = require("../model/Foto");

class FotoController {
  async store(req, res) {
    const data = await Foto.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Foto.find({ idEvento: req.body.data });
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Foto.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new FotoController();
