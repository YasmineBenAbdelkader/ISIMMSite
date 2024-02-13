const express = require('express');
const router = express.Router();
const { customParticipationMethod, getAppelsOffreByPublication } = require('../Controllers/AppelOffre');
const uploadFile = require('../middlewares/uploadFile');

router.post('/participate-offre/:PubAppelOffre', uploadFile.single('Fichier'), customParticipationMethod);
router.get('/appels-offre/:PubAppelOffre', getAppelsOffreByPublication);

module.exports = router;
