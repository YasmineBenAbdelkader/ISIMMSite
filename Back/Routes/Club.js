const express = require("express");
const Route = express.Router();

const Club = require("../Controllers/Club"); // Assurez-vous que le chemin d'accès vers votre contrôleur est correct

Route.post("/create", Club.AjouterClub);
Route.get("/findAll", Club.findAllClubs);
Route.delete("/:ID", Club.SupprimerClub);
Route.post("/Enregistrer", Club.EnregistrerClub);
Route.get("/:id", Club.findByIdClub);
Route.put("/updateNomPres/:id", Club.ModifierNomPresidentClub);
Route.get("/findByDomaine/:domaine", Club.findByDomaine);







// Autres routes pour gérer les enseignants...

module.exports = Route;