const express = require('express');
const Route = express.Router();
const { AjouterCalendrier, getCalendrierByEnseignant  } = require('../Controllers/CalendrierSurv');
const uploadFile = require('../middlewares/uploadFile');


Route.post('/add-CalendrierSurv', uploadFile.single('Calendrier'), AjouterCalendrier);
Route.get('/by-enseignant/:enseignant', getCalendrierByEnseignant);

module.exports = Route;