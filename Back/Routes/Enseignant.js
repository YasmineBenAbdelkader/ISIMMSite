const express = require("express");
const Route = express.Router();
const Enseignant = require("../Controllers/Enseignant"); // Assurez-vous que le chemin d'accès vers votre contrôleur est correct
const uploadFile = require('../middlewares/uploadFile');


Route.post("/create", Enseignant.AjouterEnseignant);
Route.put("/Inscrire",Enseignant.Inscrire);
Route.put("/Enregistrer/:id",uploadFile.fields([{ name: 'photo', maxCount: 1 },{ name: 'cv', maxCount: 1 }, { name: 'cours', maxCount: 10 }]), Enseignant.CompleterProfil);
Route.get("/find4All", Enseignant.find4Enseignant);

Route.delete("/:cin", Enseignant.SupprimerEnseignant);
Route.get("/:id", Enseignant.findByIdEnseignant);
Route.get("/findByGrade/:grade", Enseignant.findByGrade);
Route.get("/", Enseignant.getAllEnseignants);
Route.get("/findByGrade/:grade", Enseignant.findByGrade);


//Route.get("/NameLastName", Enseignant.getAllNamesAndLastNames);
//Route.put("/updategrade/:id", Enseignant.updateGrade);
//Route.put("/updateadd/:id", Enseignant.updateAdresse);
//Route.put("/updattel/:id", Enseignant.updateTelephone);
Route.get("/findByChefDep/MATH", Enseignant.findByChefDepMath);
Route.get("/findByChefDep/INFO", Enseignant.findByChefDepInfo);
Route.get("/findByChefDep/EL", Enseignant.findByChefDepEL);












//Route.get('/enregistres', Enseignant.findAllEnseignantsEnregistres);

//Route.get("/findOldestEnseignant", Enseignant.findOldestEnseignant);
/*Router.get("/trouver-tous", enseignantController.TrouverTousEnseignants);*/

// Autres routes pour gérer les enseignants...

module.exports = Route;