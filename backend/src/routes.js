const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Iniciar sessão
routes.post('/sessions', SessionController.create);

// Listar ONGs

routes.get('/ongs', OngController.index);

// Cadastrar ONGs
routes.post('/ongs', OngController.create);

// Listas casos
routes.get('/incidents', IncidentController.index);

// Cadastrar casos
routes.post('/incidents', IncidentController.create);

// Deletar casos
routes.delete('/incidents/:id', IncidentController.delete);

// Incidentes por ONG
routes.get('/profile', ProfileController.index);

module.exports = routes;
