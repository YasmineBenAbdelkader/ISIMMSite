const express = require("express");
const Route = express.Router();
const uploadFile = require("../Middlewares/uploadFile");

const Etudiant = require("../Controllers/EmploiEtudiant");

Route.post("/add",  uploadFile.fields({ name: 'emploi', maxCount: 1 }), Etudiant.AjouterEmploi);

module.exports=Route