const EmploiEtudiant = require('../Models/EmploiEtudiant');

const emploiEtudiantController = {
    AjouterEmploi: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEmploi = new EmploiEtudiant({
                emploi: req.body.emploi,
                // Autres champs si nécessaire...
            });

            const emploiEnregistre = await nouvelEmploi.save();

            console.log("Emploi ajouté :", emploiEnregistre);

            res.status(201).json({
                message: 'Emploi ajouté avec succès',
                emploi: emploiEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'emploi: ${error.message}` });
        }
    },
};

module.exports = emploiEtudiantController;
