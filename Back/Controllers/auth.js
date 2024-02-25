const bcrypt = require('bcryptjs');
const Etudiant = require('../Models/Etudiant');
const { generateToken } = require('../Middlewares/auth');


const login = async (req, res) => {
    try {
      const { adresse_email, mot_de_passe } = req.body;
      const etudiant = await Etudiant.findOne({ adresse_email }); // Utilisez un nom de variable différent pour éviter le conflit
      if (!etudiant) {
        return res.status(404).json({ error: 'Etudiant not found' });
      }
      const isMatch = await bcrypt.compare(mot_de_passe, etudiant.mot_de_passe); // Utilisez également le nom de variable différent ici
      if (!isMatch) {
        return res.status(404).json({ error: 'incorrect mot_de_passe' });
      }
      req.session.Etudiant = etudiant;
      const token = generateToken(etudiant);
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };
  

const getEtudiantByID = async (req, res) => {
  try {
    const EtudiantId = req.params.id;
    const Etudiant = await Etudiant.findById(EtudiantId);
    if (!Etudiant) {
      return res.status(404).json({ success: false, message: 'Etudiant not found' });
    }
    res.status(200).json({ data: Etudiant });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getEmail = async (req, res) => {
  try {
    const { adresse_email } = req.params;
    console.log(adresse_email); 
    const Etudiant = await Etudiant.findOne({ adresse_email });
    console.log(Etudiant);
    if (!Etudiant) {
      return res.json({ emailExists: false });
    }
    return res.json({ emailExists: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const decryptmot_de_passe = async (req, res) => {
  try {
    const { mot_de_passe, hashedmot_de_passe } = req.body;
    const ismot_de_passeMatch = await bcrypt.compare(mot_de_passe, hashedmot_de_passe);
    console.log("mot_de_passe", mot_de_passe);
    console.log("hashedmot_de_passe", hashedmot_de_passe);
    console.log("ismot_de_passeMatch", ismot_de_passeMatch);
    if (!ismot_de_passeMatch) {
      return res.json({ ismot_de_passeMatch: false });
    }
    return res.json({ ismot_de_passeMatch: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const encryptmot_de_passe = async (mot_de_passe) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedmot_de_passe = await bcrypt.hash(mot_de_passe, salt);
    return hashedmot_de_passe;
  } catch (error) {
    console.error('Error encrypting mot_de_passe:', error);
    throw error;
  }
};

const logout = async (req, res) => {
  res.clearCookie('jwtToken');
   res.status(200).json({ message: "Logout successful" });
};

module.exports = {login, logout,   getEtudiantByID, 
  getEmail,   
  decryptmot_de_passe,
  encryptmot_de_passe};