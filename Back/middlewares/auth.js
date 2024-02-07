const jwt = require('jsonwebtoken');
const config = require('../Config/Config');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized-a' });
  }

  const tokenString = token.split(' ')[1];

  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(tokenString, 'ARTY');
    console.log ("decode = ", decoded);

    // Access user information from the decoded payload
    const user = decoded.user;
    console.log ("user = ", user);

    // Store the user object in the request for further processing
    req.user = user;
    console.log ("req.user =", req.user);

    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ error: 'Unauthorized-e' });
  }
};


const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      mailAddress: user.mailAddress,
    },
  };
  return jwt.sign(payload, config.secretKey, { expiresIn: '1h' });
};



module.exports = { authenticateUser, generateToken };