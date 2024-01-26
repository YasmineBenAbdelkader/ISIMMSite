const express = require("express");
const Route = express.Router();

const Etudiant = require("../Controllers/Etudiant");

Route.post("/create", Etudiant.AjouterEtudiant);
Route.delete("/delete-all", Etudiant.SupprimerTousLesEtudiants);


module.exports=Route