const Ic = require("../model/Ic");

class IcController {
  async store(req, res) {
    const data = await Ic.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Ic.find({});
    return res.json(data);
  }
  async remove(req, res, id) {
    const data = await Ic.remove({ _id: id });
    return res.json(data);
  }
}

module.exports = new IcController();
