const { Types } = require('mongoose');
const Club = require("../Models/Club");


const ClubController = {


    AjouterClub: async (req, res) => {// ll admin 
        try {
            console.log("Données reçues :", req.body);
    
            const nouveauClub = new Club({
                ID: req.body.ID,
                nom_club: req.body.nom_club,
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
          const clubID = req.params.ID;
          const clubSupprime = await Club.findOneAndDelete({ ID: clubID });
      
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

      findAllClubs : async (req, res) => {
        try {
            const clubs = await Club.find({}, { _id: 0 });
    
            res.status(200).json({
                message: 'Liste de tous les clubs récupérée avec succès',
                clubs: clubs.map(club => ({
                    ID: club.ID,
                    nom_club: club.nom_club,
                    nom_pres: club.nom_pres,
                    domaine: club.domaine,
                    logo: club.logo,
                    membre1: club.membre1,
                    membre2: club.membre2,
                    membre3: club.membre3,
                    membre4: club.membre4,
                    site: club.site,
                    linkedIn: club.linkedIn,
                    facebook: club.facebook,
                    desc: club.desc,
                    nbr_membre: club.nbr_membre,
                    encadrant: club.encadrant,
                    annee_univ: club.annee_univ
                }))
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
