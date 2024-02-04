const { Types } = require('mongoose');
const Club = require("../Models/Club");


const ClubController = {


    AjouterClub: async (req, res) => {// ll admin 
        try {
            console.log("Données reçues :", req.body);
    
            const nouveauClub = new Club({
                ID: req.body.ID,
                nom_club: req.body.nom_club,
                nom_pres: req.body.nom_pres,
                domaine: req.body.domaine,
                
            });
    
            const clubEnregistre = await nouveauClub.save();
    
            console.log("Club ajouté :", clubEnregistre);
    
            res.status(201).json({
                message: 'Club ajouté avec succès',
                club: clubEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout du club: ${error.message}` });
        }
    },


    EnregistrerClub: async (req, res) => {//formulaire Club
        try {
            console.log("Données reçues :", req.body);
    
            const nouveauClub = new Club({
                ID: req.body.ID,
                nom_club: req.body.nom_club,
                nom_pres: req.body.nom_pres,
                logo: req.body.logo,
                domaine: req.body.domaine,
                membre1: req.body.membre1,
                membre2: req.body.membre2,
                membre3: req.body.membre3,
                membre4: req.body.membre4,
                site: req.body.site,
                linkedIn: req.body.linkedIn,
                facebook: req.body.facebook,
                desc: req.body.desc,
                nbr_membre: req.body.nbr_membre,
                encadrant: req.body.encadrant,
                annee_univ: req.body.annee_univ,
            });
    
            const clubEnregistre = await nouveauClub.save();
    
            console.log("Club ajouté :", clubEnregistre);
    
            res.status(201).json({
                message: 'Club ajouté avec succès',
                club: clubEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout du club: ${error.message}` });
        }
    },

    SupprimerClub: async (req, res) => {
        try {
          const clubID = req.params.id;
          const clubSupprime = await Club.findOneAndDelete({ _id: clubID });
      
          if (!clubSupprime) {
            return res.status(404).json({ message: 'Aucun club trouvé avec cet ID' });
          }
      
          res.status(200).json({
            message: 'Club supprimé avec succès',
            club: clubSupprime,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
      },

      findAllClubs: async (req, res) => {
        try {
          const clubs = await Club.find();
    
          res.status(200).json({
            message: 'Liste des clubs récupérée avec succès',
            clubs: clubs,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
      },


      findByIdClub: async (req, res) => {
        try {
          let clubID = req.params.id;
      
          // Supprimer les espaces blancs en début et en fin de la chaîne
          clubID = clubID.trim();
      
          // Recherche du club par son ID en utilisant la méthode findById de Mongoose
          const club = await Club.findById(clubID);
      
          if (!club) {
            return res.status(404).json({ message: 'Aucun club trouvé avec cet ID' });
          }
      
          res.status(200).json({
            message: 'Club récupéré avec succès',
            club: club,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
      },
      

      ModifierNomPresidentClub: async (req, res) => {
        try {
            const clubId = req.params.id;
            const newPresidentName = req.body.nom_pres; // Nouveau nom du président
    
            // Recherche du club par son ID
            const club = await Club.findById(clubId);
    
            if (!club) {
                return res.status(404).json({ message: 'Aucun club trouvé avec cet ID' });
            }
    
            // Mise à jour du nom du président du club
            club.nom_pres = newPresidentName;
            const updatedClub = await club.save();
    
            res.status(200).json({
                message: 'Nom du président du club mis à jour avec succès',
                club: updatedClub,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la mise à jour du nom du président du club: ${error.message}` });
        }
    },


    findByDomaine: async (req, res) => {
        try {
            const domaine = req.params.domaine;
    
            // Supprimer les espaces blancs en début et en fin de la chaîne
            const trimmedDomaine = domaine.trim();
    
            // Recherche des clubs par leur domaine en utilisant la méthode find de Mongoose
            const clubs = await Club.find({ domaine: trimmedDomaine });
    
            if (clubs.length === 0) {
                return res.status(404).json({ message: 'Aucun club trouvé avec ce domaine' });
            }
    
            res.status(200).json({
                message: 'Clubs récupérés avec succès',
                clubs: clubs,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    
    
    


};

module.exports = ClubController;
