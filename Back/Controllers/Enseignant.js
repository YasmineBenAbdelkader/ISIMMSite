const { Types } = require('mongoose');
const Enseignant = require("../Models/Enseignant"); 
const bcrypt = require('bcrypt'); 

const enseignantController = {
    AjouterEnseignant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEnseignant = new Enseignant({
                ID: req.body.ID,
                matricule: req.body.matricule,
                nom: req.body.nom,
                prenom: req.body.prenom,
                grade: req.body.grade, 
                email: req.body.email // Assurez-vous que req.body.email est défini avec une valeur unique

            });

            const enseignantEnregistre = await nouvelEnseignant.save();

            console.log("Enseignant ajouté :", enseignantEnregistre);

            res.status(201).json({
                message: 'Enseignant ajouté avec succès',
                enseignant: enseignantEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'enseignant: ${error.message}` });
        }
    },


    findAllEnseignant: async (req, res) => {
        try {
            const enseignants = await Enseignant.find();
            res.status(200).json({ enseignants });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la récupération des enseignants: ${error.message}` });
        }
    },

    SupprimerEnseignant: async (req, res) => {
        try {
          const enseignantID = req.params.id;
          const enseignantSupprime = await Enseignant.findOneAndDelete({ _id: enseignantID });
      
          if (!enseignantSupprime) {
            return res.status(404).json({ message: 'Aucun enseignant trouvé avec cet ID' });
          }
      
          res.status(200).json({
            message: 'enseignant supprimé avec succès',
            enseignant: enseignantSupprime,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
      },
   

      EnregistrerEnseignant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEnseignant = new Enseignant({
                ID: req.body.ID,
                matricule: req.body.matricule,
                nom: req.body.nom,
                prenom: req.body.prenom,
                grade: req.body.grade,
                photo: req.body.photo,
                date_naissance: req.body.date_naissance,
                adresse: req.body.adresse,
                email: req.body.email,
                telephone: req.body.telephone,
                diplomes: req.body.diplomes,
                specialite: req.body.specialite,
                date_embauche: req.body.date_embauche,
                cours: req.body.cours,
                mot_de_passe: req.body.mot_de_passe,
            });

            const enseignantEnregistre = await nouvelEnseignant.save();

            console.log("Enseignant ajouté :", enseignantEnregistre);

            res.status(201).json({
                message: 'Enseignant ajouté avec succès',
                enseignant: enseignantEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'enseignant: ${error.message}` });
        }
    },

    findByIdEnseignant: async (req, res) => {
        try {
            let enseignantID = req.params.id;

            // Remove leading/trailing whitespaces and newline characters
            enseignantID = enseignantID.trim();

            // Recherche de l'enseignant par son ID en utilisant findById de Mongoose
            const enseignant = await Enseignant.findById(enseignantID);

            if (!enseignant) {
                return res.status(404).json({ message: 'Aucun enseignant trouvé avec cet ID' });
            }

            res.status(200).json({
                message: 'Enseignant récupéré avec succès',
                enseignant: enseignant,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },


    findByGrade: async (req, res) => {
        try {
            const grade = req.params.grade;

            // Remove leading/trailing whitespaces and newline characters
            const trimmedGrade = grade.trim();

            // Recherche des enseignants par leur grade en utilisant find de Mongoose
            const enseignants = await Enseignant.find({ grade: trimmedGrade });

            if (enseignants.length === 0) {
                return res.status(404).json({ message: 'Aucun enseignant trouvé avec ce grade' });
            }

            res.status(200).json({
                message: 'Enseignants récupérés avec succès',
                enseignants: enseignants,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },



    /*findOldestEnseignant: async (req, res) => {
        try {
            const oldestEnseignant = await Enseignant.findOne().sort({ date_embauche: 1 });

            if (!oldestEnseignant) {
                return res.status(404).json({ message: 'Aucun enseignant trouvé' });
            }

            res.status(200).json({
                message: 'Enseignant le plus ancien récupéré avec succès',
                enseignant: oldestEnseignant,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },*/


    /*findAllEnseignantsEnregistres : async (req, res) => {
        try {
            const enseignants = await Enseignant.find({ enregistre: true });
    
            if (enseignants.length === 0) {
                return res.status(404).json({ message: 'Aucun enseignant enregistré trouvé' });
            }
    
            res.status(200).json({
                message: 'Enseignants enregistrés récupérés avec succès',
                enseignants: enseignants,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la récupération des enseignants enregistrés: ${error.message}` });
        }
    },*/
    

};




module.exports = enseignantController;
