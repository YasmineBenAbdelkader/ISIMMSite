const express = require('express');
const router = express.Router();
const { customParticipationMethod } = require('../Controllers/AppelOffre');
const uploadFile = require('../middlewares/uploadFile');

router.post('/participate-offre/:PubAppelOffre', uploadFile.single('Fichier'), customParticipationMethod);

module.exports = router;
