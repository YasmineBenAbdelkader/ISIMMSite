const express = require("express");
const cors = require('cors');
const database = require("./Config/database");
require('dotenv').config();
const secretKey = require("./Config/Config");
const path = require('path');
const session = require('express-session');
const etudiantRoute = require("./Routes/Etudiant");
const EmploiDuTempsRoute = require("./Routes/EmploiDuTemps");
const ActualiteRoute = require("./Routes/Actu");
const OffreStageEmploiRoute = require("./Routes/OffreStageEmploi");
const CalendrierRoute = require("./Routes/Calendrier");
const AppelOffreRoute = require("./Routes/AppelOffre");
const PubAppelOffreRoute = require("./Routes/PubAppelOffre");
const EchangeAcadRoute = require("./Routes/EchangeAcad");
const event4ctRoute = require("./Routes/Event4C");
const formRoute = require("./Routes/formulaire");
const staffRoute = require("./Routes/staff");
const clubRoute = require("./Routes/Club");
const enseignantRoute = require("./Routes/Enseignant");
const classesRoute = require("./Routes/Classes");
const biblioRoute = require("./Routes/Biblio");
const EntrepriseRoute = require("./Routes/Entreprise");
const RattrapageRoute = require("./Routes/Rattrapage");
const CalendrierSurvRoute = require("./Routes/CalendrierSurv");



/*const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));*/
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use("/etudiant", etudiantRoute);
app.use("/EmploiDuTemps", EmploiDuTempsRoute);
app.use('/enseignant', enseignantRoute);
app.use('/event4c', event4ctRoute);
app.use('/appelOffre', AppelOffreRoute);
app.use('/PubAppelOffre', PubAppelOffreRoute);
app.use('/echangeAcad', EchangeAcadRoute);
app.use('/form', formRoute);
app.use('/staff', staffRoute);
app.use('/club', clubRoute);
app.use('/EmploiDuTemps', EmploiDuTempsRoute);
app.use('/Actualite', ActualiteRoute);
app.use('/OffreStageEmploi', OffreStageEmploiRoute);
app.use('/Calendrier', CalendrierRoute);
app.use('/Classes', classesRoute);
app.use('/Biblio', biblioRoute);
app.use('/Entreprise', EntrepriseRoute);
app.use('/Rattrapage', RattrapageRoute);
app.use('/CalSurv', CalendrierSurvRoute);
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(5000, () => {
    console.log(`Server running on http://localhost:${5000}`);
});

