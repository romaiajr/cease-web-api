const express = require("express");

const routes = express.Router();
const ArtigoController = require("./app/controller/ArtigoController");
const LivroController = require("./app/controller/LivroController");
const EquipeController = require("./app/controller/EquipeController");
const CapituloController = require("./app/controller/CapituloController");
const IcController = require("./app/controller/IcController");
const AtividadeComplementarController = require("./app/controller/AtividadeComplementarController");
const EventoController = require("./app/controller/EventoController");
const FotoController = require("./app/controller/FotoController");
const ProjetoController = require("./app/controller/ProjetoController");
const LeituraController = require("./app/controller/LeituraController");
const ProducaoController = require("./app/controller/ProducaoController");
const TccController = require("./app/controller/TccController");
const NoticiaController = require("./app/controller/NoticiaController");
const LoginController = require("./app/controller/LoginController");

//ROTAS ARTIGOS
routes.post("/artigos-get", ArtigoController.index);
routes.post("/artigos-add", ArtigoController.store);
routes.post("/artigos-remove", ArtigoController.remove);

//ROTAS LIVROS
routes.post("/livros-get", LivroController.index);
routes.post("/livros-add", LivroController.store);
routes.post("/livros-remove", LivroController.remove);

//ROTAS CAPITULOS
routes.post("/capitulos-get", CapituloController.index);
routes.post("/capitulos-add", CapituloController.store);
routes.post("/capitulos-remove", CapituloController.remove);

//ROTAS IC
routes.post("/iniciacao-cientifica-get", IcController.index);
routes.post("/iniciacao-cientifica-add", IcController.store);
routes.post("/iniciacao-cientifica-remove", IcController.remove);

//ROTAS ATIVIDADES COMPLEMENTARES
routes.post(
  "/atividade-complementar-get",
  AtividadeComplementarController.index
);
routes.post(
  "/atividade-complementar-add",
  AtividadeComplementarController.store
);
routes.post(
  "/atividade-complementar-remove",
  AtividadeComplementarController.remove
);
routes.post(
  "/atividade-complementar-getOne",
  AtividadeComplementarController.indexOne
);

//ROTAS PROJETOS DE EXTENSÃO
routes.post("/projetos-get", ProjetoController.index);
routes.post("/projetos-add", ProjetoController.store);
routes.post("/projetos-remove", ProjetoController.remove);

//ROTAS EVENTOS
routes.post("/eventos-getAtv", EventoController.indexAtv);
routes.post("/eventos-getProj", EventoController.indexProj);
routes.post("/eventos-add", EventoController.store);
routes.post("/eventos-remove", EventoController.remove);

//ROTAS FOTOS
routes.post("/fotos-get", FotoController.index);
routes.post("/fotos-add", FotoController.store);
routes.post("/fotos-remove", FotoController.remove);

//ROTAS EQUIPES
routes.post("/equipe-get", EquipeController.index);
routes.post("/equipe-add", EquipeController.store);
routes.post("/equipe-remove", EquipeController.remove);

//ROTAS LEITURAS
routes.post("/leituras-get", LeituraController.index);
routes.post("/leituras-add", LeituraController.store);
routes.post("/leituras-remove", LeituraController.remove);

//ROTAS LEITURAS
routes.post("/producao-get", ProducaoController.index);
routes.post("/producao-add", ProducaoController.store);
routes.post("/producao-remove", ProducaoController.remove);

//ROTAS TCC
routes.post("/tcc-get", TccController.index);
routes.post("/tcc-add", TccController.store);
routes.post("/tcc-remove", TccController.remove);

//ROTAS Noticias
routes.post("/noticias-get", NoticiaController.index);
routes.post("/noticias-add", NoticiaController.store);
routes.post("/noticias-remove", NoticiaController.remove);

routes.post("/login", LoginController.login);
module.exports = routes;
