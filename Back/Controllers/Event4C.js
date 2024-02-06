// ... (Autres importations)

const { Types } = require('mongoose');
const Event4C = require("../Models/Event4C");

const eventController = {
    AjouterEvent: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEvent = new Event4C({
                ID: req.body.ID,
                titre: req.body.titre,
                lieu: req.body.lieu,
                date: req.body.date,
                description:req.body.description,
                nature_event:req.body.nature_event,
                isLatest: true // Le nouvel événement est le plus récent
            });

            await Event4C.updateMany({ _id: { $ne: newEvent._id } }, { $set: { isLatest: false } });

            const eventEnregistre = await nouvelEvent.save();

            console.log("Evenement ajouté :", eventEnregistre);

            res.status(201).json({
                message: 'Evenement ajouté avec succès',
                evenement: eventEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'évenement: ${error.message}` });
        }
    },


    findAllEvents: async (req, res) => {
        try {
            const events = await Event4C.find();
            res.status(200).json({ events });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la récupération des événements: ${error.message}` });
        }
    },


    SupprimerEvent: async (req, res) => {
        try {
            const eventID = req.params.id;
            const eventSupprime = await Event4C.findOneAndDelete({ _id: eventID });
        
            if (!eventSupprime) {
                return res.status(404).json({ message: 'Aucun événement trouvé avec cet ID' });
            }
        
            res.status(200).json({
                message: 'Événement supprimé avec succès',
                evenement: eventSupprime,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },


    EnregistrerEvenement: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEvenement = new Event4C({
                ID: req.body.ID,
                titre: req.body.titre,
                lieu: req.body.lieu,
                date: req.body.date,
                description: req.body.description,
                photo: req.body.photo,
                facebook: req.body.facebook,
                insta: req.body.insta,
                linkedin: req.body.linkedin
            });

            const evenementEnregistre = await nouvelEvenement.save();

            console.log("Evenement ajouté :", evenementEnregistre);

            res.status(201).json({
                message: 'Événement ajouté avec succès',
                evenement: evenementEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'événement: ${error.message}` });
        }
    },

    findByIdEvent: async (req, res) => {
        try {
            let eventID = req.params.id;
    
            // Remove leading/trailing whitespaces and newline characters
            eventID = eventID.trim();
    
            // Recherche de l'événement par son ID en utilisant findById de Mongoose
            const event = await Event4C.findById(eventID);
    
            if (!event) {
                return res.status(404).json({ message: 'Aucun événement trouvé avec cet ID' });
            }
    
            res.status(200).json({
                message: 'Événement récupéré avec succès',
                event: event,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },

    ModifierDateEvent: async (req, res) => {
        try {
            const eventId = req.params.id;
            const newDate = req.body.date; // Nouvelle date à mettre à jour
    
            // Recherche de l'événement par son ID
            const event = await Event4C.findById(eventId);
    
            if (!event) {
                return res.status(404).json({ message: 'Aucun événement trouvé avec cet ID' });
            }
    
            // Mise à jour de la date de l'événement
            event.date = newDate;
            const updatedEvent = await event.save();
    
            res.status(200).json({
                message: 'Date de l\'événement mise à jour avec succès',
                event: updatedEvent,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la mise à jour de la date de l'événement: ${error.message}` });
        }
    },

    ModifierLieuEvent: async (req, res) => {
        try {
            const eventId = req.params.id;
            const newLieu = req.body.lieu; // Nouveau lieu à mettre à jour
    
            // Recherche de l'événement par son ID
            const event = await Event4C.findById(eventId);
    
            if (!event) {
                return res.status(404).json({ message: 'Aucun événement trouvé avec cet ID' });
            }
    
            // Mise à jour du lieu de l'événement
            event.lieu = newLieu;
            const updatedEvent = await event.save();
    
            res.status(200).json({
                message: 'Lieu de l\'événement mis à jour avec succès',
                event: updatedEvent,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la mise à jour du lieu de l'événement: ${error.message}` });
        }
    },

    /* findLatestEvent : async (req, res) => {
        try {
            const latestEvent = await Event4C.findOne({ isLatest: true });
            if (!latestEvent) {
                return res.status(404).json({ message: 'Aucun événement trouvé' });
            }
            res.status(200).json(latestEvent);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Une erreur est survenue lors de la recherche de l\'événement le plus récent' });
        }
    },*/

    AfficheEventClub: async (req, res) => {
        try {
            const eventClub = await Event4C.find({ eventClub: true });
    
            if (eventClub.length === 0) {
                return res.status(404).json({ message: 'Pas  evenement Clubs '});
            }
    
            res.status(200).json({
                message: 'Evenments Clubs récupérés avec succès',
                eventClub: eventClub,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    
    

};


    
    


module.exports = eventController;
