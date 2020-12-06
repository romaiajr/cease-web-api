const AtividadeComplementar = require("../model/AtividadeComplementar");
const Evento = require("../model/Evento");
const Foto = require("../model/Foto");

class AtividadeComplementarController {
  async store(req, res) {
    const data = await AtividadeComplementar.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await AtividadeComplementar.find({});
    return res.json(data);
  }
  async indexOne(req, res) {
    const data = await AtividadeComplementar.find({ _id: req.body.data });
    return res.json(data);
  }
  async remove(req, res) {
    const data = await AtividadeComplementar.deleteOne({ _id: req.body.data });
    const eventos = await Evento.find({ idAtividade: req.body.data });
    eventos.forEach(async (evento) => {
      await Foto.deleteMany({ idEvento: evento._id });
    });
    await Evento.deleteMany({ idAtividade: req.body.data });

    return res.json(data);
  }
}

module.exports = new AtividadeComplementarController();
