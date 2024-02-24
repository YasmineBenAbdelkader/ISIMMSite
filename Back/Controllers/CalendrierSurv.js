const calSurv = require('../Models/CalendrierSurv');

exports.AjouterCalendrier = async (req, res) => {
    try {
        console.log('Received data:', req.body);

        // Vérifier si un Calendrier similaire existe déjà
        const CalendrierExistant = await calSurv.findOne({
            enseignant: req.body.enseignant,
        });

        if (CalendrierExistant) {
            // Calendrier existe déjà, renvoyer une erreur
            return res.status(400).json({ message: 'calendrier with the same details already exists' });
        }

        // Si l'Calendrier n'existe pas, créer un nouvel Calendrier
        const nouvelCalendrier = new calSurv({
            Calendrier: req.file ? req.file.filename : null,
            enseignant: req.body.enseignant,
        });

        // Enregistrer le nouvel Calendrier
        const CalendrierEnregistre = await nouvelCalendrier.save();

        console.log('calendrier added:', CalendrierEnregistre);

        res.status(201).json({
            message: 'calendrier added successfully',
            calSurv: CalendrierEnregistre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while adding calendrier: ${error.message}`, error: error.stack });
    }
};

exports.getCalendrierByEnseignant = async (req, res) => {
    try {
        let { enseignant } = req.params;

        // Logging for debugging
        console.log('Input enseignant:', enseignant);

        // Trim leading and trailing spaces
        enseignant = enseignant.trim();

        // Logging for debugging
        console.log('Trimmed enseignant:', enseignant);

        // Perform a case-insensitive partial match
        const CalendrierList = await calSurv.find({ enseignant: { $regex: new RegExp(enseignant, 'i') } });

        // Logging for debugging
        console.log('CalendrierList:', CalendrierList);

        res.status(200).json({
            message: 'Calendrier records retrieved successfully',
            CalendrierList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while retrieving Calendrier records: ${error.message}`, error: error.stack });
    }
};