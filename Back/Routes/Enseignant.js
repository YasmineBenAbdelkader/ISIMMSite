const express = require("express");
const Route = express.Router();

const Enseignant = require("../Controllers/Enseignant"); // Assurez-vous que le chemin d'accès vers votre contrôleur est correct

Route.post("/create", Enseignant.AjouterEnseignant);
Route.post("/Inscrire",Enseignant.Inscrire);
Route.get("/findAll", Enseignant.findAllEnseignant);
Route.delete("/:id", Enseignant.SupprimerEnseignant);
Route.post("/Enregistrer", Enseignant.EnregistrerEnseignant);
Route.get("/:id", Enseignant.findByIdEnseignant);
Route.get("/findByGrade/:grade", Enseignant.findByGrade);
Route.get("/findByChefDep/INFO", Enseignant.findByChefDepInfo); // Nouvelle route
Route.get("/findByChefDep/MATH", Enseignant.findByChefDepMath); // Nouvelle route
Route.get("/findByChefDep/EL", Enseignant.findByChefDepEL); // Nouvelle route

//Route.get('/enregistres', Enseignant.findAllEnseignantsEnregistres);

//Route.get("/findOldestEnseignant", Enseignant.findOldestEnseignant);




/*Router.get("/trouver-tous", enseignantController.TrouverTousEnseignants);*/

// Autres routes pour gérer les enseignants...

module.exports = Route;