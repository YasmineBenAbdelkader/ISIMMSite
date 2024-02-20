const EmploiDuTemps = require('../Models/EmploiDuTemps');

exports.AjouterEmploi = async (req, res) => {
    try {
        console.log('Received data:', req.body);

        // Vérifier si un emploi similaire existe déjà
        const emploiExistant = await EmploiDuTemps.findOne({
            level: req.body.level,
            enseignant: req.body.enseignant,
        });

        if (emploiExistant) {
            // Emploi existe déjà, renvoyer une erreur
            return res.status(400).json({ message: 'emploi with the same details already exists' });
        }

        // Si l'emploi n'existe pas, créer un nouvel emploi
        const nouvelEmploi = new EmploiDuTemps({
            emploi: req.file ? req.file.filename : null,
            level: req.body.level,
            enseignant: req.body.enseignant,
        });

        // Enregistrer le nouvel emploi
        const emploiEnregistre = await nouvelEmploi.save();

        console.log('emploi added:', emploiEnregistre);

        res.status(201).json({
            message: 'emploi added successfully',
            emploi: emploiEnregistre,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while adding emploi: ${error.message}`, error: error.stack });
    }
};

exports.getEmploiByEnseignant = async (req, res) => {
    try {
        const { enseignant } = req.params;

        // Logging for debugging
        console.log('Input enseignant:', enseignant);

        // Trim leading and trailing spaces
        const trimmedEnseignant = enseignant.trim();

        // Logging for debugging
        console.log('Trimmed enseignant:', trimmedEnseignant);

        // Perform a case-insensitive partial match
        const emploiList = await EmploiDuTemps.find({ enseignant: { $regex: new RegExp(trimmedEnseignant, 'i') } });

        // Logging for debugging
        console.log('EmploiList:', emploiList);

        res.status(200).json({
            message: 'Emploi records retrieved successfully',
            emploiList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while retrieving Emploi records: ${error.message}`, error: error.stack });
    }
};


exports.getEmploiByLevel = async (req, res) => {
    try {
        const { level } = req.params;

        // Logging for debugging
        console.log('Input level:', level);

        // Trim leading and trailing spaces
        const trimmedlevel = level.trim();

        // Logging for debugging
        console.log('Trimmed level:', trimmedlevel);

        // Perform a case-insensitive partial match
        const emploiList = await EmploiDuTemps.find({ level: { $regex: new RegExp(trimmedlevel, 'i') } });

        // Logging for debugging
        console.log('EmploiList:', emploiList);

        res.status(200).json({
            message: 'Emploi records retrieved successfully',
            emploiList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while retrieving Emploi records: ${error.message}`, error: error.stack });
    }
};

exports.getEmploiByParams = async (req, res) => {
    try {
        const { Cycle_etude, specialite, niveau_etude, Td } = req.params;

        // Construct the query based on provided parameters
        const query = {
            Cycle_etude: Cycle_etude || { $exists: true },
            specialite: specialite || { $exists: true },
            niveau_etude: niveau_etude || { $exists: true },
            Td: Td || { $exists: true },
        };

        const emploiList = await EmploiDuTemps.find(query);

        res.status(200).json({
            message: 'emploi records retrieved successfully',
            emploiList,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while retrieving emploi records: ${error.message}`, error: error.stack });
    }
};


exports.ModifierEmploi = async (req, res) => {
    try {
        const { id } = req.params; // Obtenez l'ID de l'emploi à modifier depuis les paramètres de l'URL
        const { emploi } = req.body; // Obtenez la nouvelle valeur du champ "emploi" depuis le corps de la requête

        // Vérifiez si l'emploi avec l'ID donné existe
        const emploiExistant = await EmploiDuTemps.findById(id);

        if (!emploiExistant) {
            return res.status(404).json({ message: 'emploi not found' });
        }

        // Mettez à jour uniquement le champ "emploi" si une nouvelle valeur est fournie
        if (emploi !== undefined) {
            emploiExistant.emploi = emploi;
        }

        // Enregistrez les modifications
        const emploiModifie = await emploiExistant.save();

        res.status(200).json({
            message: 'emploi updated successfully',
            emploi: emploiModifie,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `An error occurred while updating emploi: ${error.message}`, error: error.stack });
    }
};
