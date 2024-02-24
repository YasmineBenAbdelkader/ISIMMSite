const express = require("express");
const ClasseController = require("../Controllers/Classes");

const router = express.Router();

// Route pour ajouter une nouvelle classe
router.post("/Add", ClasseController.ajouterClasse);
router.get("/all", ClasseController.getAllClasses);

module.exports = router;
