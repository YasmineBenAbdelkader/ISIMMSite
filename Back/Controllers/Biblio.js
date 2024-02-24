const Biblio = require('../Models/Biblio');

// Méthode pour ajouter un nouvel élément à la bibliothèque
exports.ajouterElement = async (req, res) => {
    try {
        const { titre } = req.body;
        const photo = req.files['photo'] ? req.files['photo'][0].filename : null;
        const doc = req.files['doc'] ? req.files['doc'][0].filename : null;
        const nouvelElement = new Biblio({ titre, doc, photo });
        await nouvelElement.save();
        res.status(201).json({ message: 'Élément ajouté avec succès !', nouvelElement });
    } catch (error) {
        res.status(400).json({ message: 'Impossible d\'ajouter l\'élément', error: error.message });
    }
};


exports.afficherTous = async (req, res) => {
    try {
        // Récupérer tous les éléments de la bibliothèque depuis la base de données
        const biblios = await Biblio.find();
        res.status(200).json(biblios);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des éléments de la bibliothèque', error: error.message });
    }
};