const express = require('express');
const router = express.Router();
const { AjouterOffreStageEmploi, SupprimerOffreStageEmploi, ModifierOffreStageEmploi, ObtenirDernieresOffreStageEmploi, ObtenirOffresStage, ObtenirOffresEmploi  } = require('../Controllers/OffreStageEmploi');
const uploadFile = require('../middlewares/uploadFile');

router.post('/add-Offre', uploadFile.fields([{ name: 'photo', maxCount: 1 }, { name: 'files', maxCount: 10 }]), AjouterOffreStageEmploi);
router.delete('/delete-Offre/:id', SupprimerOffreStageEmploi);
router.put('/update-Offre/:id',  uploadFile.fields([{ name: 'photo', maxCount: 1 }, { name: 'files', maxCount: 10 }]), ModifierOffreStageEmploi);
router.get('/last-Offre', ObtenirDernieresOffreStageEmploi);
router.get('/offres-stage', ObtenirOffresStage);
router.get('/offres-emploi', ObtenirOffresEmploi);

module.exports = router;
