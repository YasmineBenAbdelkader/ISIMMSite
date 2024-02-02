const Actualite = require('../Models/Actu'); 

exports.AjouterActualite = async (req, res) => {
    try {
        const nouvelleActualite = new Actualite({
            titre: req.body.titre,
            description: req.body.description,
            photo: req.files['photo'] ? req.files['photo'][0].filename : null,
            files: req.files['files'] ? req.files['files'].map(files => files.filename) : null,
            formulaire: req.body.formulaire, 
        });
        
        const actualiteEnregistre = await nouvelleActualite.save();

        console.log('Actualité ajoutée :', actualiteEnregistre);
       

        res.status(201).json({
            message: 'Actualité ajoutée avec succès',
            actualite: actualiteEnregistre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de l'ajout de l'actualité : ${error.message}`,
            error: error.stack,
        });
    }
};



exports.SupprimerActualite = async (req, res) => {
    try {
        const actualiteId = req.params.id;

        const actualiteExistante = await Actualite.findById(actualiteId);
        if (!actualiteExistante) {
            return res.status(404).json({
                message: 'Actualité non trouvée',
            });
        }

        // Utiliser findByIdAndDelete au lieu de findByIdAndRemove
        await Actualite.findByIdAndDelete(actualiteId);

        res.status(200).json({
            message: 'Actualité supprimée avec succès',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la suppression de l'actualité : ${error.message}`,
            error: error.stack,
        });
    }
};

exports.ModifierActualite = async (req, res) => {
    try {
        const actualiteId = req.params.id;

        // Vérifier si l'actualité existe
        const actualiteExistante = await Actualite.findById(actualiteId);
        if (!actualiteExistante) {
            return res.status(404).json({
                message: 'Actualité non trouvée',
            });
        }

        // Mettre à jour les propriétés de l'actualité
        actualiteExistante.titre = req.body.titre || actualiteExistante.titre;
        actualiteExistante.description = req.body.description || actualiteExistante.description;
        // Mettez à jour d'autres propriétés selon vos besoins
        actualiteExistante.photo = req.files['photo'] ? req.files['photo'][0].filename : null || actualiteExistante.photo;
        actualiteExistante.files = req.files['files'] ? req.files['files'].map(files => files.filename) : null || actualiteExistante.files;
        actualiteExistante.formulaire = req.body.formulaire || actualiteExistante.formulaire;

        // Enregistrez les modifications
        const actualiteModifiee = await actualiteExistante.save();

        res.status(200).json({
            message: 'Actualité modifiée avec succès',
            actualite: actualiteModifiee,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la modification de l'actualité : ${error.message}`,
            error: error.stack,
        });
    }
};


exports.ObtenirDernieresActualites = async (req, res) => {
    try {
        // Utilisez la méthode find de Mongoose pour obtenir les 6 dernières actualités
        const dernieresActualites = await Actualite.find({})
            .sort({ date: -1 }) // Triez par ordre décroissant selon la date
            .limit(6); // Limitez le résultat à 6 actualités

        res.status(200).json({
            message: 'Les 6 dernières actualités ont été récupérées avec succès',
            actualites: dernieresActualites,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la récupération des dernières actualités : ${error.message}`,
            error: error.stack,
        });
    }
};