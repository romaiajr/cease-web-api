const Evento = require("../model/Evento");

class EventoController {
  async store(req, res) {
    const data = await Evento.create(req.body);
    return res.json(data);
  }
  async indexAtv(req, res) {
    const data = await Evento.find({ idAtividade: req.body.data });
    return res.json(data);
  }
  async indexProj(req, res) {
    const data = await Evento.find({ idProjeto: req.body.data });
    return res.json(data);
  }
  async remove(req, res) {
    const data = await Evento.deleteOne({ _id: req.body.data });
    return res.json(data);
  }
}

module.exports = new EventoController();
