const express = require("express");
const Route = express.Router();

const Enseignant = require("../Controllers/Enseignant"); // Assurez-vous que le chemin d'accès vers votre contrôleur est correct

Route.post("/create", Enseignant.AjouterEnseignant);
Route.post("/Inscrire",Enseignant.Inscrire);
Route.get("/findAll", Enseignant.findAllEnseignant);
Route.get("/find4All", Enseignant.find4Enseignant);

Route.delete("/:cin", Enseignant.SupprimerEnseignant);
Route.post("/Enregistrer", Enseignant.EnregistrerEnseignant);
Route.get("/:id", Enseignant.findByIdEnseignant);
Route.get("/findByGrade/:grade", Enseignant.findByGrade);

//Route.put("/updategrade/:id", Enseignant.updateGrade);
//Route.put("/updateadd/:id", Enseignant.updateAdresse);
//Route.put("/updattel/:id", Enseignant.updateTelephone);
Route.get("/findByChefDepMath", Enseignant.findByChefDepMath);
Route.get("/findByChefDepInf", Enseignant.findByChefDepInfo);
Route.get("/findByChefDepElec", Enseignant.findByChefDepEL);












//Route.get('/enregistres', Enseignant.findAllEnseignantsEnregistres);

//Route.get("/findOldestEnseignant", Enseignant.findOldestEnseignant);
/*Router.get("/trouver-tous", enseignantController.TrouverTousEnseignants);*/

// Autres routes pour gérer les enseignants...

module.exports = Route;