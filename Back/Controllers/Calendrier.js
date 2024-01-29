const calendrier = require('../Models/Calendrier');

exports.AjouterCalendrier = async (req, res) => {
    try {
        console.log('Received data:', req.body);

        // Vérifier si un Calendrier similaire existe déjà
        const CalendrierExistant = await calendrier.findOne({
            Cycle_etude: req.body.Cycle_etude,
            specialite: req.body.specialite,
            niveau_etude: req.body.niveau_etude,
            Td: req.body.Td,
            enseignant: req.body.enseignant,
        });

        if (CalendrierExistant) {
            // Calendrier existe déjà, renvoyer une erreur
            return res.status(400).json({ message: 'calendrier with the same details already exists' });
        }

        // Si l'Calendrier n'existe pas, créer un nouvel Calendrier
        const nouvelCalendrier = new calendrier({
            Calendrier: req.file ? req.file.filename : null,
            Cycle_etude: req.body.Cycle_etude,
            specialite: req.body.specialite,
            niveau_etude: req.body.niveau_etude,
            Td: req.body.Td,
            enseignant: req.body.enseignant,
        });

        // Enregistrer le nouvel Calendrier
        const CalendrierEnregistre = await nouvelCalendrier.save();

        console.log('calendrier added:', CalendrierEnregistre);

        res.status(201).json({
            message: 'calendrier added successfully',
            Calendrier: CalendrierEnregistre,
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
        const CalendrierList = await calendrier.find({ enseignant: { $regex: new RegExp(enseignant, 'i') } });

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


exports.getCalendrierByParams = async (req, res) => {
    try {
        const { Cycle_etude, specialite, niveau_etude, Td } = req.params;

        // Construct the query based on provided parameters
        const query = {
            Cycle_etude: Cycle_etude || { $exists: true },
            specialite: specialite || { $exists: true },
            niveau_etude: niveau_etude || { $exists: true },
            Td: Td || { $exists: true },
        };

        const CalendrierList = await calendrier.find(query);

        res.status(200).json({
            message: 'calendrier records retrieved successfully',
            CalendrierList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while retrieving calendrier records: ${error.message}`, error: error.stack });
    }
};

exports.ModifierCalendrier = async (req, res) => {
    try {
        const { id } = req.params; // Obtenez l'ID de l'Calendrier à modifier depuis les paramètres de l'URL
        const { Calendrier } = req.body; // Obtenez la nouvelle valeur du champ "Calendrier" depuis le corps de la requête

        // Vérifiez si l'Calendrier avec l'ID donné existe
        const CalendrierExistant = await calendrier.findById(id);

        if (!CalendrierExistant) {
            return res.status(404).json({ message: 'Calendrier not found' });
        }

        // Mettez à jour uniquement le champ "Calendrier" si une nouvelle valeur est fournie
        if (Calendrier !== undefined) {
            CalendrierExistant.Calendrier = Calendrier;
        }

        // Enregistrez les modifications
        const CalendrierModifie = await CalendrierExistant.save();

        res.status(200).json({
            message: 'Calendrier updated successfully',
            Calendrier: CalendrierModifie,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while updating Calendrier: ${error.message}`, error: error.stack });
    }
};
