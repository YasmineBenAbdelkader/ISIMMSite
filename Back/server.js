const express = require("express");
const cors = require('cors');
const etudiantRoute = require("./Routes/Etudiant");
const EmploiDuTemps = require("./Routes/EmploiDuTemps");
const Actualite = require("./Routes/Actu");
const OffreStageEmploi = require("./Routes/OffreStageEmploi");
const Calendrier = require("./Routes/Calendrier");

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
app.use("/EmploiDuTemps", EmploiDuTemps);
app.use("/Actualite", Actualite);
app.use("/Offre", OffreStageEmploi);
app.use("/Calendrier", Calendrier);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
