const Etudiant = require('../Models/Etudiant');

const etudiantController = {
    AjouterEtudiant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEtudiant = new Etudiant({
                ID: req.body.ID,
                num_inscription: req.body.num_inscription,
                nom: req.body.nom,
                prenom: req.body.prenom,
                // Autres champs...
            });

            const etudiantEnregistre = await nouvelEtudiant.save();

            console.log("Étudiant ajouté :", etudiantEnregistre);

            res.status(201).json({
                message: 'Étudiant ajouté avec succès',
                etudiant: etudiantEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'étudiant: ${error.message}` });
        }
    },

    SupprimerTousLesEtudiants: async (req, res) => {
        try {
            const result = await Etudiant.deleteMany({});
            console.log("Tous les étudiants ont été supprimés :", result);

            res.status(200).json({
                message: 'Tous les étudiants ont été supprimés avec succès',
                deletedCount: result.deletedCount,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la suppression de tous les étudiants: ${error.message}` });
        }
    },
};

module.exports = etudiantController;
