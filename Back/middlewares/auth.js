const jwt = require('jsonwebtoken');
const config = require('../Config/Config');

const authenticateEtudiant = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized-a' });
  }

  const tokenString = token.split(' ')[1];

  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(tokenString, 'ARTY');
    console.log ("decode = ", decoded);

    // Access Etudiant information from the decoded payload
    const Etudiant = decoded.Etudiant;
    console.log ("Etudiant = ", Etudiant);

    // Store the Etudiant object in the request for further processing
    req.Etudiant = Etudiant;
    console.log ("req.Etudiant =", req.Etudiant);

    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ error: 'Unauthorized-e' });
  }
};


const generateToken = (Etudiant) => {
  const payload = {
    Etudiant: {
      id: Etudiant.id,
      adresse_email: Etudiant.adresse_email,
    },
  };
  return jwt.sign(payload, config.secretKey, { expiresIn: '1h' });
};



module.exports = { authenticateEtudiant, generateToken };