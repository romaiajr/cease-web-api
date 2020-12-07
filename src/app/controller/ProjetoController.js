const Projeto = require("../model/Projeto");

class ProjetoController {
  async store(req, res) {
    const data = await Projeto.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Projeto.find({});
    return res.json(data);
  }
  async indexOne(req, res) {
    const data = await Projeto.find({ _id: req.body.data });
    console.log(data);
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Projeto.deleteOne({ _id: req.body.data });
    const eventos = await Evento.find({ idProjeto: req.body.data });
    eventos.forEach(async (evento) => {
      await Foto.deleteMany({ idEvento: evento._id });
    });
    await Evento.deleteMany({ idAtividade: req.body.data });

    return res.json(data);
  }
}

module.exports = new ProjetoController();
