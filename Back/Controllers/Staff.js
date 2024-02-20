const { Types } = require('mongoose');
const Staff = require("../Models/StaffAdmin");


const staffController = {


    AjouterStaffAdministratif : async (req, res) => {

        try {
            console.log("Données reçues :", req.body);
    
            const nouveauStaff = new Staff({
                ID: req.body.ID,
                nom: req.body.nom,
                prenom: req.body.prenom,
                poste: req.body.poste,
                grade: req.body.grade,
                email: req.body.email,
                keyArea: req.body.keyArea,
                photo: req.file ? req.file.filename : null,
            });
    
            const staffEnregistre = await nouveauStaff.save();
    
            console.log("Membre du staff ajouté :", staffEnregistre);
    
            res.status(201).json({
                message: 'Membre du staff ajouté avec succès',
                staff: staffEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout du membre du staff : ${error.message}` });
        }
    },

    findByPosteDirection: async (req, res) => {
        try {
            const staffDirection = await Staff.find({ poste: "Direction" });
    
            res.status(200).json({
                message: 'Liste des membres du staff ayant le poste "Direction"',
                staff: staffDirection,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    
    findAllStaffAdministratif : async (req, res) => {
        try {
            const staff = await Staff.find();
    
            res.status(200).json({
                message: 'Liste des membres du staff administratif récupérée avec succès',
                staff: staff,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },



    findByIdStaffAdministratif : async (req, res) => {
        try {
            let staffID = req.params.id;
    
            // Supprime les espaces et les caractères de nouvelle ligne en début et en fin de chaîne
            staffID = staffID.trim();
    
            // Recherche du membre du staff par son ID en utilisant findById de Mongoose
            const staff = await Staff.findById(staffID);
    
            if (!staff) {
                return res.status(404).json({ message: 'Aucun membre du staff trouvé avec cet ID' });
            }
    
            res.status(200).json({
                message: 'Membre du staff récupéré avec succès',
                staff: staff,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },



    findByKeyArea: async (req, res) => {
        try {

            let { keyArea } = req.params;

            keyArea = keyArea.trim();

            const StaffList = await Staff.find({ keyArea: { $regex: new RegExp(keyArea, 'i') } });
        
            res.status(200).json({
                message: 'Liste des membres du staff récupérée avec succès',
                StaffList,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    
    

     supprimerMembreStaffAdministratif : async (req, res) => {
        try {
            const staffID = req.params.id;
            const staffSupprime = await Staff.findOneAndDelete({ _id: staffID });
    
            if (!staffSupprime) {
                return res.status(404).json({ message: 'Aucun membre du staff trouvé avec cet ID' });
            }
    
            res.status(200).json({
                message: 'Membre du staff supprimé avec succès',
                staff: staffSupprime,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },


    updatePoste : async (req, res) => {
        try {
            const staffId = req.params.id;
            const newPoste = req.body.keyArea; // Nouveau poste à mettre à jour
    
            // Recherche du membre du personnel administratif par son ID
            const staff = await Staff.findById(staffId);
    
            if (!staff) {
                return res.status(404).json({ message: 'Aucun membre du staff trouvé avec cet ID' });
            }
    
            // Mise à jour du poste du membre du personnel administratif
            staff.poste = newPoste;
            const updatedStaff = await staff.save();
    
            res.status(200).json({
                message: 'Poste du membre du staff mis à jour avec succès',
                staff: updatedStaff,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la mise à jour du poste du membre du staff : ${error.message}` });
        }
    },

    
    
    findByPosteSco: async (req, res) => {
        try {
            const staffDirection = await Staff.find({ poste: "Scolarité" });
    
            res.status(200).json({
                message: 'Liste des membres du staff ayant le poste "Scolarité"',
                staff: staffDirection,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },

    findByPosteGuichet: async (req, res) => {
        try {
            const staffDirection = await Staff.find({ poste: "Guichet" });
    
            res.status(200).json({
                message: 'Liste des membres du staff ayant le poste "Guichet"',
                staff: staffDirection,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },

    findByPosteBiblio: async (req, res) => {
        try {
            const staffDirection = await Staff.find({ poste: "Biblio" });
    
            res.status(200).json({
                message: 'Liste des membres du staff ayant le poste "Biblio"',
                staff: staffDirection,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    
    findByPosteFinance: async (req, res) => {
        try {
            const staffDirection = await Staff.find({ poste: "Finance" });
    
            res.status(200).json({
                message: 'Liste des membres du staff ayant le poste "Finance"',
                staff: staffDirection,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    

};

module.exports = staffController;
