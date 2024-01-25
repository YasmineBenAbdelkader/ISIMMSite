const Etudiant = require('../models/Etudiant'); // Assurez-vous d'ajuster le chemin selon votre structure de dossiers

const etudiantController = {
    AjouterEtudiant: async (req, res) => {
        try {
            // Créez une instance de l'étudiant avec seulement les champs spécifiés
            const nouvelEtudiant = new Etudiant({
                ID: req.body.ID,
                num_inscription: req.body.num_inscription,
                nom: req.body.nom,
                prenom: req.body.prenom,
                // Les autres champs seront initialisés avec des valeurs vides
            });

            // Enregistrez l'étudiant dans la base de données
            const etudiantEnregistre = await nouvelEtudiant.save();

            res.status(201).json({
                message: 'Étudiant ajouté avec succès',
                etudiant: etudiantEnregistre,
            });
        }  catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'étudiant: ${error.message}` });
        }
    },
};

module.exports = etudiantController;
