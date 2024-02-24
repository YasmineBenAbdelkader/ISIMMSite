const express = require('express');
const Route = express.Router();
const { AjouterCalendrier, getCalendrierByLevel, getCalendrierByEnseignant, getCalendrierByParams, ModifierCalendrier  } = require('../Controllers/Calendrier');
const uploadFile = require('../middlewares/uploadFile');


Route.post('/add-Calendrier', uploadFile.single('Calendrier'), AjouterCalendrier);
Route.get('/by-enseignant/:enseignant', getCalendrierByEnseignant);
Route.get('/etudiant/:level', getCalendrierByLevel);
Route.get('/etudiant/:Cycle_etude/:specialite/:niveau_etude/:Td', getCalendrierByParams);
Route.put('/Calendrier/:id', ModifierCalendrier);


module.exports = Route;
