const express = require("express");
const cors = require('cors');
const etudiantRoute = require("./Routes/Etudiant");
const EmploiDuTemps = require("./Routes/EmploiDuTemps");
const Actualite = require("./Routes/Actu");
const OffreStageEmploi = require("./Routes/OffreStageEmploi");
const Calendrier = require("./Routes/Calendrier");
const AppelOffre = require("./Routes/AppelOffre");
const PubAppelOffre = require("./Routes/PubAppelOffre");
const EchangeAcad = require("./Routes/EchangeAcad");
const enseignantRoute = require("./Routes/Enseignant");
const event4ctRoute = require("./Routes/Event4C");
const formRoute = require("./Routes/formulaire");


const database = require("./Config/database")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://your-allowed-origin.com', // Adjust to your needs
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
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



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
