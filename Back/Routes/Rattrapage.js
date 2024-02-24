const express = require('express');
const router = express.Router();
const rattrapageController = require('../Controllers/Rattrapage');
const uploadFile = require('../middlewares/uploadFile');

// Route pour ajouter un rattrapage
router.post('/rattrapages', uploadFile.single('photo'), rattrapageController.ajouterRattrapage);
// Route pour récupérer tous les rattrapages
router.get('/rattrapages', rattrapageController.recupererTousLesRattrapages);

router.get('/rattrapages/:niveau', rattrapageController.recupererRattrapageParNiveau);
module.exports = router;
