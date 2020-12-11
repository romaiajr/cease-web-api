class LoginController {
  async login(req, res) {
    console.log(req.body);
    var data;
    if (
      req.body.user == process.env.LOGIN &&
      req.body.senha == process.env.SENHA
    )
      data = true;
    else data = false;
    return res.json(data);
  }
}
module.exports = new LoginController();
