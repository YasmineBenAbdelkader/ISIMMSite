const express = require('express');
const Route = express.Router();
const { AjouterEmploi, getEmploiByEnseignant, getEmploiByParams, ModifierEmploi  } = require('../Controllers/EmploiDuTemps');
const uploadFile = require('../middlewares/uploadFile');


Route.post('/add-emploi', uploadFile.single('emploi'), AjouterEmploi);
Route.get('/by-enseignant/:enseignant', getEmploiByEnseignant);
Route.get('/etudiant/:Cycle_etude/:specialite/:niveau_etude/:Td', getEmploiByParams);
Route.put('/emploi/:id', ModifierEmploi);


module.exports = Route;
