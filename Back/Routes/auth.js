const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth');
const requireAuth  = require('../Middlewares/auth');
const session = require('express-session');


// POST route for Etudiant login
router.post('/login', authController.login);

// POST route for Etudiant logout
router.post('/logout', requireAuth.authenticateEtudiant , authController.logout);

router.get('/profile', requireAuth.authenticateEtudiant, (req, res) => {
  // Access Etudiant object from the session
  const Etudiant = req.Etudiant;
  console.log("Etudiant =",Etudiant);
  if (!Etudiant) {
    console.log('Etudiant not found in session');
    return res.status(401).json({ error: 'Unauthorized8' });
  }

  res.json(Etudiant);
});

router.get('/EtudiantByID/:id', authController.getEtudiantByID);

router.get('/get-email/:mailAddress', authController.getEmail);

// router.post('/decryptPassword', (req, res) => {
//   try {
//     const isPasswordMatch = authController.decryptPassword(req, res);
//     res.json({ isPasswordMatch });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to decrypt password' });
//   }
// });

router.post('/encryptPassword', authController.encryptmot_de_passe);
router.post('/decryptPassword', authController.decryptmot_de_passe);




module.exports = router;