const Livro = require("../model/Livro");

class LivroController {
  async store(req, res) {
    const data = await Livro.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Livro.find({});
    return res.json(data);
  }
  async remove(req, res, id) {
    const data = await Livro.remove({ _id: id });
    return data;
  }
}

module.exports = new LivroController();
