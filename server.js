const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/dbTeste", { useMongoClient: true })
  .then(function () {
    console.log("MongoDB Conectado...");
  })
  .catch(function (err) {
    console.log("Erro ao conectar ao DB: " + err);
  });

const port = process.env.PORT || 5000;

//rota de cadastro de usuario cliente e cuidador
const cadastro = require('./controller/cadastro_controller');
app.use('/cadastro', cadastro);

//rota de cadastro de usuario cliente e cuidador
const autenticacao = require('./controller/autenticacao_controller');
app.use('/autenticacao', autenticacao);

//busca 
const busca = require('./controller/busca_controller');
app.use('/busca', busca);

//busca 
const atualiza = require('./controller/atualiza_controller');
app.use('/solicitacao', atualiza);

//rota teste de token
const token = require('./controller/teste_token');
app.use('/token', token);

 
app.listen(port, () => console.log(`Listening on port ${port}`));

