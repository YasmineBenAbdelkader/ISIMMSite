const express = require("express");
const Route = express.Router();
const Etudiant = require("../Controllers/Etudiant");
const uploadFile = require('../middlewares/uploadFile');

Route.post("/create", Etudiant.AjouterEtudiant);
Route.put("/Inscrire",Etudiant.Inscrire);
Route.put("/Enregistrer/:_id",uploadFile.single('photo'),Etudiant.CompleterProfil);
Route.get("/findAll", Etudiant.findAllEtudiant);
Route.get("/find4Etud", Etudiant.find4Etudiant);

Route.get("/findByCycleSpecialiteNiveau", Etudiant.findEtudiantByCriteria);
Route.get("/:id", Etudiant.findByIdEtudiant);
Route.delete("/:cin", Etudiant.SupprimerEtudiant);








module.exports=Route