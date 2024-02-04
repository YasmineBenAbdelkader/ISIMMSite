const express = require("express");
const Route = express.Router();
const Etudiant = require("../Controllers/Etudiant");

Route.post("/create", Etudiant.AjouterEtudiant);
Route.post("/Enregistrer", Etudiant.EnregistrerEtudiant);
Route.get("/findAll", Etudiant.findAllEtudiants);
Route.get("/findByCycleSpecialiteNiveau", Etudiant.findByCycleSpecialiteNiveau);
Route.get("/:id", Etudiant.findByIdEtudiant);
Route.delete("/:id", Etudiant.SupprimerEtudiant);


//Route.get("/AllInscrire",Etudiant.afficherEtudiantsInscrits);






module.exports=Route