const express = require("express");
const cors = require('cors');
const database = require("./Config/database");
require('dotenv').config();
const secretKey = require("./Config/Config");
const path = require('path');
const session = require('express-session');

const etudiantRoute = require("./Routes/Etudiant");
const EmploiDuTemps = require("./Routes/EmploiDuTemps");
const Actualite = require("./Routes/Actu");
const OffreStageEmploi = require("./Routes/OffreStageEmploi");
const Calendrier = require("./Routes/Calendrier");
const AppelOffre = require("./Routes/AppelOffre");
const PubAppelOffre = require("./Routes/PubAppelOffre");
const EchangeAcad = require("./Routes/EchangeAcad");
const event4ctRoute = require("./Routes/Event4C");
const formRoute = require("./Routes/formulaire");



const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors({
    origin: 'http://your-allowed-origin.com', // Adjust to your needs
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));


const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'ISIMM',
    resave: false,
    saveUninitialized: false
  }));




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/etudiant", etudiantRoute);
app.use("/EmploiEtudiant", etudiantRoute);
app.use('/enseignant', enseignantRoute);
app.use('/event4c', event4ctRoute);
app.use('/appelOffre', AppelOffre);
app.use('/PubAppelOffre', PubAppelOffre);
app.use('/echangeAcad', EchangeAcad);
app.use('/form', formRoute);
app.use('/staff', staffRoute);
app.use('/club', clubRoute);






// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
