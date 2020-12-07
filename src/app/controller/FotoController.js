const Foto = require("../model/Foto");

class FotoController {
  async store(req, res) {
    console.log(req.body);
    const data = await Foto.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Foto.find({ idEvento: req.body.data });
    console.log(data);
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Foto.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new FotoController();
