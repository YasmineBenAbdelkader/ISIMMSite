const appelOffre = require('../Models/AppelOffre'); 

exports.customParticipationMethod = async (req, res) => {
    try {

        

        // Create a new instance of PubAppelOffre with form data
        const participationData = new appelOffre({
            Nom: req.body.Nom,
            prenom: req.body.prenom,
            Matricule_fiscale: req.body.Matricule_fiscale,
            Email: req.body.Email,
            Adresse: req.body.Adresse,
            Téléphone: req.body.Téléphone,
            PubAppelOffre: req.params.PubAppelOffre,
            Fichier: req.file ? req.file.filename : null,
        });

        // Save the participation data
        const participationEnregistre = await participationData.save();

        console.log('Participation ajoutée :', participationEnregistre);

        res.status(201).json({
            message: 'Participation ajoutée avec succès',
            participation: participationEnregistre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la participation : ${error.message}`,
            error: error.stack,
        });
    }
};

