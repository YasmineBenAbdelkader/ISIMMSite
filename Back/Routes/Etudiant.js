const express = require("express");
const Route = express.Router();

const Etudiant = require("../Controllers/Etudiant");

Route.post("/create", Etudiant.AjouterEtudiant);


module.exports=Route