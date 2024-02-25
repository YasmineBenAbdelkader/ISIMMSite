const express = require('express');
const router = express.Router();
const { AjouterEchangeAcad, SupprimerEchangeAcad, AfficherDernieresPubs, AfficherTousEchangesAcad} = require('../Controllers/EchangeAcad');
const uploadFile = require('../middlewares/uploadFile');

router.post('/add-echangeAcad', uploadFile.fields([{ name: 'piece_jointe', maxCount: 1 }, { name: 'photo', maxCount: 1 }]), AjouterEchangeAcad);
router.delete('/:ID', SupprimerEchangeAcad);
router.get('/dernieresPublications',AfficherDernieresPubs);
router.get('/tous-echanges-acad', AfficherTousEchangesAcad);


module.exports = router;
