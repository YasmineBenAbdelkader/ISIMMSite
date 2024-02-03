const express = require('express');
const router = express.Router();
const { AjouterappelOffre, SupprimerappelOffre, AfficherDernieresPublications} = require('../Controllers/PubAppelOffre');
const uploadFile = require('../middlewares/uploadFile');

router.post('/add-offre', uploadFile.single('piece_jointe'), AjouterappelOffre);
router.delete('/supprimerAppelOffre/:appelOffreId', SupprimerappelOffre);
router.get('/dernieresPublications',AfficherDernieresPublications);

module.exports = router;
