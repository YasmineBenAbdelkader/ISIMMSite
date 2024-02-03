const express = require('express');
const router = express.Router();
const { AjouterActualite, SupprimerActualite, ModifierActualite, ObtenirDernieresActualites } = require('../Controllers/Actu');
const uploadFile = require('../middlewares/uploadFile');

router.post('/add-actu', uploadFile.fields([{ name: 'photo', maxCount: 1 }, { name: 'files', maxCount: 10 }]), AjouterActualite);
router.delete('/delete-actu/:id', SupprimerActualite);
router.put('/update-actu/:id',  uploadFile.fields([{ name: 'photo', maxCount: 1 }, { name: 'files', maxCount: 10 }]), ModifierActualite);
router.get('/last-actu', ObtenirDernieresActualites);

module.exports = router;
