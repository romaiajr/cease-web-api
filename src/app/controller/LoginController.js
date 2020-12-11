class LoginController {
  async login(req, res) {
    var data = { login: process.env.LOGIN, senha: process.env.SENHA };
    console.log(data);
    return res.json(data);
  }
}
module.exports = new LoginController();
