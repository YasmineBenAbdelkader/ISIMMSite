const EchangeAcad = require('../Models/EchangeAcad'); 
const moment = require('moment');

// Ajout par admin
exports.AjouterEchangeAcad = async (req, res) => {
    try {
        const EchangeAcadId = req.params.EchangeAcadId;

        // Create a new instance of EchangeAcad with form data and the reference to EchangeAcad
        const nouvelleEchangeAcad = new EchangeAcad({
            titre: req.body.titre,
            description: req.body.description,
            piece_jointe: req.file ? req.file.filename : null,
            photo: req.file ? req.file.filename : null,
        });

        const EchangeAcadEnregistre = await nouvelleEchangeAcad.save();

        console.log('publication ajoutée :', EchangeAcadEnregistre);

        res.status(201).json({
            message: 'publication ajoutée avec succès',
            EchangeAcad: EchangeAcadEnregistre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de l'ajout de la publication : ${error.message}`,
            error: error.stack,
        });
    }
};


// Suppression par admin
exports.SupprimerEchangeAcad = async (req, res) => {
    try {
        const EchangeAcadId = req.params.EchangeAcadId;

        // Vérifiez si l'ID de la publication est fourni
        if (!EchangeAcadId) {
            return res.status(400).json({
                message: "L'ID de la publication d'appel d'offres est requis pour la suppression.",
            });
        }

        // Recherchez la publication d'appel d'offres par ID et supprimez-la
        const EchangeAcadSupprimee = await EchangeAcad.findByIdAndDelete(EchangeAcadId);

        // Vérifiez si la publication a été trouvée et supprimée
        if (!EchangeAcadSupprimee) {
            return res.status(404).json({
                message: "La publication d'appel d'offres avec cet ID n'a pas été trouvée.",
            });
        }

        console.log('publication supprimée :', EchangeAcadSupprimee);

        res.status(200).json({
            message: 'publication supprimée avec succès',
            EchangeAcad: EchangeAcadSupprimee,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la suppression de la publication : ${error.message}`,
            error: error.stack,
        });
    }
};

// Afficher les 4 dernières publications avec leurs détails
exports.AfficherDernieresPubs = async (req, res) => {
    try {
        // Récupérez les 4 dernières publications en triant par ordre décroissant d'ID (ou un autre champ de date)
        const dernieresPubs = await EchangeAcad.find().sort({ _id: -1 }).limit(4);

        // Formatez les dates au format "jj/mm/aaaa"
        const publicationsFormatees = dernieresPubs.map(publication => {
            return {
                _id: publication._id,
                titre: publication.titre,
                description: publication.description,
                piece_jointe: publication.piece_jointe,
                photo: publication.piece_jointe,
                date_creation: moment(publication.date_creation).format('DD/MM/YYYY'),
            };
        });

        res.status(200).json({
            message: 'Les 4 dernières publications ont été récupérées avec succès',
            publications: publicationsFormatees,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la récupération des dernières publications : ${error.message}`,
            error: error.stack,
        });
    }
};