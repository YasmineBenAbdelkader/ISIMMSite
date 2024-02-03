const { Types } = require('mongoose');
const Formulaire = require("../Models/formulaire"); 



const FormController = {


    submitForm: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            num_insc: req.body.num_insc,
            groupe: req.body.groupe,
            cin2: req.body.cin2,
            cause_demande: req.body.cause_demande,
            num_tel: req.body.num_tel,
            doc_admini: req.body.doc_admini,
            faute: req.body.faute,
            annee_univ: req.body.annee_univ,
          });
      
          // Enregistrer le nouvel étudiant dans la base de données
          const FormEnregistre = await nouvelForm.save();
      
          // Répondre avec un message indiquant que l'étudiant a été enregistré avec succès
          res.status(201).json({ message: 'Formulaire enregistré avec succès', Formulaire: FormEnregistre });
        } catch (error) {
          // En cas d'erreur, renvoyer une réponse avec le statut 500 et un message d'erreur
          console.error('Erreur lors de l\'enregistrement de l\'formulaire :', error);
          res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'formulaire' });
        }
      }
      






    };






module.exports = FormController;