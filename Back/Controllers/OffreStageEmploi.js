const OffreStageEmploi = require('../Models/OffreStageEmploi'); 


exports.AjouterOffreStageEmploi = async (req, res) => {
    try {
       
        let stage = false;
        let emploi = false;
        if (req.body.nature === "Offre de stage") {
            stage = true;
        } else if (req.body.nature === "Offre d'emploi") {
            emploi = true;
        }

        const nouvelleOffreStageEmploi = new OffreStageEmploi({
            ID: req.body.ID,
            titre: req.body.titre,
            entreprise: req.body.entreprise,
            nature: req.body.nature,
            stage: stage, // Utiliser la variable stage
            emploi: emploi,
            description: req.body.description,
            photo: req.files['photo'] ? req.files['photo'][0].filename : null,
            files: req.files['files'] ? req.files['files'].map(files => files.filename) : null,
            formulaire: req.body.formulaire,
        });

        const OffreStageEmploiEnregistre = await nouvelleOffreStageEmploi.save();

        console.log('OffreStageEmploi ajoutée :', OffreStageEmploiEnregistre);

        res.status(201).json({
            message: 'OffreStageEmploi ajoutée avec succès',
            OffreStageEmploi: OffreStageEmploiEnregistre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de l'ajout de l'actualité : ${error.message}`,
            error: error.stack,
        });
    }
};





exports.SupprimerOffreStageEmploi = async (req, res) => {
    try {
        const OffreStageEmploiId = req.params.id;

        const OffreStageEmploiExistante = await OffreStageEmploi.findById(OffreStageEmploiId);
        if (!OffreStageEmploiExistante) {
            return res.status(404).json({
                message: 'OffreStageEmploi non trouvée',
            });
        }

        // Utiliser findByIdAndDelete au lieu de findByIdAndRemove
        await OffreStageEmploi.findByIdAndDelete(OffreStageEmploiId);

        res.status(200).json({
            message: 'OffreStageEmploi supprimée avec succès',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la suppression de l'actualité : ${error.message}`,
            error: error.stack,
        });
    }
};


exports.ModifierOffreStageEmploi = async (req, res) => {
    try {
        const OffreStageEmploiId = req.params.id;

        // Vérifier si l'actualité existe
        const OffreStageEmploiExistante = await OffreStageEmploi.findById(OffreStageEmploiId);
        if (!OffreStageEmploiExistante) {
            return res.status(404).json({
                message: 'OffreStageEmploi non trouvée',
            });
        }

        // Mettre à jour les propriétés de l'actualité
        OffreStageEmploiExistante.titre = req.body.titre || OffreStageEmploiExistante.titre;
        OffreStageEmploiExistante.description = req.body.description || OffreStageEmploiExistante.description;
        // Mettez à jour d'autres propriétés selon vos besoins
        OffreStageEmploiExistante.photo = req.files['photo'] ? req.files['photo'][0].filename : null || OffreStageEmploiExistante.photo;
        OffreStageEmploiExistante.files = req.files['files'] ? req.files['files'].map(files => files.filename) : null || OffreStageEmploiExistante.files;
        OffreStageEmploiExistante.formulaire = req.body.formulaire || OffreStageEmploiExistante.formulaire;

        // Enregistrez les modifications
        const   OffreStageEmploiModifiee = await   OffreStageEmploiExistante.save();

        res.status(200).json({
            message: '  OffreStageEmploi modifiée avec succès',
            actualite: OffreStageEmploiModifiee,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la modification de l'actualité : ${error.message}`,
            error: error.stack,
        });
    }
};


exports.ObtenirDernieresOffreStageEmploi = async (req, res) => {
    try {
        // Utilisez la méthode find de Mongoose pour obtenir les 6 dernières actualités
        const dernieresOffreStageEmploi = await OffreStageEmploi.find({})
            .sort({ date: -1 }) // Triez par ordre décroissant selon la date
            .limit(6); // Limitez le résultat à 6 actualités

        res.status(200).json({
            message: 'Les 6 dernières actualités ont été récupérées avec succès',
            actualites: dernieresOffreStageEmploi,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la récupération des dernières actualités : ${error.message}`,
            error: error.stack,
        });
    }
};


exports.ObtenirOffresStage = async (req, res) => {
    try {
        // Utilisez la méthode find de Mongoose pour obtenir les offres de stage où stage est true
        const offresStage = await OffreStageEmploi.find({ stage: true })
        .select(' -_id ID titre entreprise nature description photo files formulaire');


        res.status(200).json({
            message: 'Les offres de stage ont été récupérées avec succès',
            offresStage: offresStage,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la récupération des offres de stage : ${error.message}`,
            error: error.stack,
        });
    }
};

exports.ObtenirOffresEmploi = async (req, res) => {
    try {
        // Utilisez la méthode find de Mongoose pour obtenir les offres de stage où stage est true
        const offresEmploi = await OffreStageEmploi.find({ emploi: true })    
            .select('-_id ID titre entreprise nature description photo files formulaire');


        res.status(200).json({
            message: 'Les offres de emploi ont été récupérées avec succès',
            offresEmploi: offresEmploi,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la récupération des offres de stage : ${error.message}`,
            error: error.stack,
        });
    }
};