const express = require("express");

const routes = express.Router();
const ArtigoController = require("./app/controller/ArtigoController");
const LivroController = require("./app/controller/LivroController");
const EquipeController = require("./app/controller/EquipeController");
const CapituloController = require("./app/controller/CapituloController");
const IcController = require("./app/controller/IcController");
const AtividadeComplementarController = require("./app/controller/AtividadeComplementarController");

//ROTAS ARTIGOS
routes.get("/artigos", ArtigoController.index);
routes.post("/artigos", ArtigoController.store);
routes.delete("/artigos", ArtigoController.remove);

//ROTAS LIVROS
routes.get("/livros", LivroController.index);
routes.post("/livros", LivroController.store);
routes.delete("/livros", LivroController.remove);

//ROTAS CAPITULOS
routes.get("/capitulos", CapituloController.index);
routes.post("/capitulos", CapituloController.store);
routes.delete("/capitulos", CapituloController.remove);

//ROTAS IC
routes.get("/iniciacao-cientifica", IcController.index);
routes.post("/iniciacao-cientifica", IcController.store);
routes.delete("/iniciacao-cientifica", IcController.remove);

//ROTAS ATIVIDADES COMPLEMENTARES
routes.get("/atividade-complementar", AtividadeComplementarController.index);
routes.post("/atividade-complementar", AtividadeComplementarController.store);
routes.delete(
  "/atividade-complementar",
  AtividadeComplementarController.remove
);

//ROTAS EQUIPES
routes.get("/equipe", EquipeController.index);
routes.post("/equipe", EquipeController.store);
routes.delete("/equipe", EquipeController.remove);

module.exports = routes;
