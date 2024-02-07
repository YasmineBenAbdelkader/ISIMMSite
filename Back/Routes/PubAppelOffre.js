const express = require('express');
const router = express.Router();
const { AjouterappelOffre, SupprimerappelOffre, AfficherDernieresPublications, AfficherToutesPublications} = require('../Controllers/PubAppelOffre');
const uploadFile = require('../middlewares/uploadFile');

router.post('/add-offre', uploadFile.single('piece_jointe'), AjouterappelOffre);
router.delete('/supprimerAppelOffre/:appelOffreId', SupprimerappelOffre);
router.get('/dernieresPublications',AfficherDernieresPublications);
router.get('/toutes-publications', AfficherToutesPublications); 

module.exports = router;
