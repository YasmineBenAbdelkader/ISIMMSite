const express = require("express");
const Route = express.Router();

const Form = require("../Controllers/formulaire"); // Assurez-vous que le chemin d'accès vers votre contrôleur est correct


Route.post('/submit', Form.submitForm);







// Autres routes pour gérer les enseignants...

module.exports = Route;