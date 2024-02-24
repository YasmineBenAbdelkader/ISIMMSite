const express = require('express');
const router = express.Router();
const EntrepriseController = require('../Controllers/Entreprise');
const uploadFile = require('../middlewares/uploadFile');

// Route pour ajouter un nouvel élément à la bibliothèque
router.post('/Add', uploadFile.fields([{ name: 'photo', maxCount: 1 }]), EntrepriseController.ajouterElement);

// Route pour afficher tous les éléments de la bibliothèque
router.get('/All', EntrepriseController.afficherTous);

module.exports = router;
