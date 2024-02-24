const express = require('express');
const router = express.Router();
const biblioController = require('../Controllers/Biblio');
const uploadFile = require('../middlewares/uploadFile');

// Route pour ajouter un nouvel élément à la bibliothèque
router.post('/Add', uploadFile.fields([{ name: 'photo', maxCount: 1 },{ name: 'doc', maxCount: 1 }]), biblioController.ajouterElement);

// Route pour afficher tous les éléments de la bibliothèque
router.get('/All', biblioController.afficherTous);

module.exports = router;
