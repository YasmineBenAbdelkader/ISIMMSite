const Classe = require('../Models/Classes');


// Méthode pour ajouter une nouvelle classe
const ajouterClasse = async (req, res) => {
    try {
        // Récupérer les données envoyées dans la requête
        const { titre } = req.body;

        // Créer une nouvelle instance de Classe
        const nouvelleClasse = new Classe({ titre });

        // Sauvegarder la nouvelle classe dans la base de données
        const classeEnregistree = await nouvelleClasse.save();

        // Répondre au client avec la classe enregistrée
        res.status(201).json(classeEnregistree);
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de l'ajout de la classe :", error);
        res.status(500).json({ message: "Erreur lors de l'ajout de la classe" });
    }
};

const getAllClasses = async (req, res) => {
    try {
        // Récupérer toutes les classes depuis la base de données
        const classes = await Classe.find();

        // Répondre au client avec les classes récupérées
        res.status(200).json(classes);
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la récupération des classes :", error);
        res.status(500).json({ message: "Erreur lors de la récupération des classes" });
    }
};

module.exports = { ajouterClasse,getAllClasses };
