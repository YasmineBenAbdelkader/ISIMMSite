const { Types } = require('mongoose');
const Event4C = require("../Models/Event4C");

const eventController = {
    AjouterEvent: async (req, res) => {

        let club = false;
        let centre = false;
        if (req.body.nature === "Evenement centre 4C") {
            centre = true;
        } else if (req.body.nature === "Evenement Club") {
            club = true;
        }
        try {
            console.log("Données reçues :", req.body);
    
            const nouvelEvent = new Event4C({
                ID: req.body.ID,
                titre: req.body.titre,
                lieu: req.body.lieu,
                photo: req.file ? req.file.originalname :'' ,
                date: req.body.date,
                jour: req.body.jour,
                mois: req.body.mois,
                description: req.body.description,
                nature_event: req.body.nature_event,
                facebook: req.body.facebook,
                insta: req.body.insta,
                linkedin: req.body.linkedin,
                heure: req.body.heure,
                minute: req.body.minute,
                periode: req.body.periode,
                club : club,
                centre: centre,
            });
    
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
    

    findAllEvenements: async (req, res) => {
        try {
            const evenements = await Event4C.find({}, { _id: 0 });
            res.status(200).json({
                message: 'Liste de tous les événements récupérée avec succès',
                evenements: evenements.map(event => ({
                    ID: event.ID,
                    titre: event.titre,
                    lieu: event.lieu,
                    photo: event.photo,
                    date: event.date,
                    jour: event.jour,
                    mois: event.mois,
                    heure: event.heure,
                    minute: event.minute,
                    periode: event.periode,
                    description: event.description,
                    facebook: event.facebook,
                    insta: event.insta,
                    linkedin: event.linkedin,
                    nature_event: event.nature_event,
                    // Vous pouvez ajouter d'autres champs ici selon votre besoin
                }))
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    


    SupprimerEvent: async (req, res) => {
        try {
            const eventID = req.params.ID;
            const eventSupprime = await Event4C.findOneAndDelete({ ID: eventID });
        
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

    

    findLatestEvents: async (req, res) => {
        try {
            const latestEvents = await Event4C.find().sort({ date: -1 }).limit(6);
            if (!latestEvents || latestEvents.length === 0) {
                return res.status(404).json({ message: 'Aucun événement trouvé' });
            }
            res.status(200).json({
                message: 'Les 6 derniers événements récupérés avec succès',
                events: latestEvents,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la recherche des 6 derniers événements: ${error.message}` });
        }
    },

    
    


    
    findByNatureEvent: async (req, res) => {
    try {
        
        const events = await Event4C.find({ nature_event: "Evenement Club" });
        
        // Vérifier s'il y a des événements correspondants
        if (events.length === 0) {
            return res.status(404).json({ message: `Aucun événement trouvé pour la nature ${natureEvent}` });
        }
        
        // Retourner les événements trouvés
        res.status(200).json({
            message: `Événements de la nature ${natureEvent} récupérés avec succès`,
            events: events,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
    }
},


    
    
ObtenirClub : async (req, res) => {
    try {
        // Utilisez la méthode find de Mongoose pour obtenir les offres de stage où stage est true
        const offresEmploi = await Event4C.find({ club: true })    
            //.select('-_id ID titre entreprise nature description photo files formulaire');


        res.status(200).json({
            message: 'Les evenements clubs ont été récupérées avec succès',
            offresEmploi: offresEmploi,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Une erreur s'est produite lors de la récupération des evenements clubs : ${error.message}`,
            error: error.stack,
        });
    }
}
};


module.exports = eventController;
