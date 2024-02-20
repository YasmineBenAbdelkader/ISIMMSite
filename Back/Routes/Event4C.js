const express = require("express");
const Route = express.Router();
const Event4C = require("../Controllers/Event4C");
const uploadFile = require('../middlewares/uploadFile');

Route.post("/create",uploadFile.single('photo'),Event4C.AjouterEvent);
Route.get("/findAll", Event4C.findAllEvents);
Route.get("/lastEvent", Event4C.findLatestEvents);
//Route.delete("/:id", Event4C.SupprimerEvent);
Route.post("/Enregistrer", Event4C.EnregistrerEvenement);
Route.get("/:id", Event4C.findByIdEvent);
Route.put("/:id", Event4C.ModifierDateEvent);
Route.put("/updateLieu/:id", Event4C.ModifierLieuEvent);
Route.get("/eventClub", Event4C.AfficheEventClub);// me temshish 



//Route.get("/findClosestEvent", Event4C.findLatestEvent); // Nouvelle route



//Route.get("/findByGrade/:grade", Enseignant.findByGrade);


module.exports=Route
