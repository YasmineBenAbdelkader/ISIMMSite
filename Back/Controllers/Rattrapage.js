const Rattrapage = require('../Models/Rattrapage');

// Méthode de contrôleur pour ajouter un rattrapage
const ajouterRattrapage = async (req, res) => {
    try {
        // Récupérer les données du corps de la requête
        const { ID, level, date, horaire, salle } = req.body;
        const photo = req.file ? req.file.filename : null; // Correction de la récupération de la photo

        // Créer une nouvelle instance de Rattrapage avec les données fournies
        const nouveauRattrapage = new Rattrapage({
            ID,
            level,
            date,
            horaire,
            salle,
            photo
        });

        // Enregistrer le nouveau rattrapage dans la base de données
        const rattrapageAjoute = await nouveauRattrapage.save();

        // Répondre avec le rattrapage ajouté
        res.status(201).json(rattrapageAjoute);
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ message: error.message });
    }
};


const recupererTousLesRattrapages = async (req, res) => {
    try {
        // Récupérer tous les rattrapages depuis la base de données
        const rattrapages = await Rattrapage.find();

        // Répondre avec les rattrapages récupérés
        res.status(200).json(rattrapages);
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ message: error.message });
    }
};

const recupererRattrapageParNiveau = async (req, res) => {
    try {
        // Récupérer le niveau (level) depuis les paramètres de la requête
        const { niveau } = req.params;

        // Récupérer les rattrapages pour le niveau spécifié depuis la base de données
        const rattrapages = await Rattrapage.find({ level: niveau });

        // Vérifier si des rattrapages ont été trouvés pour le niveau spécifié
        if (rattrapages.length === 0) {
            return res.status(404).json({ message: "Aucun rattrapage trouvé pour ce niveau." });
        }

        // Répondre avec les rattrapages récupérés pour le niveau spécifié
        
        res.status(200).json({
            message: 'Emploi records retrieved successfully',
            rattrapages,
        });
    } catch (error) {
        // En cas d'erreur, répondre avec un code d'erreur et un message d'erreur
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    ajouterRattrapage,
    recupererTousLesRattrapages,
    recupererRattrapageParNiveau
};
