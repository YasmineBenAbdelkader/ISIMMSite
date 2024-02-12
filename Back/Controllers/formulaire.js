const { Types } = require('mongoose');
const Formulaire = require("../Models/formulaire"); 



const FormController = {


    submitFormMutation: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            num_insc: req.body.num_insc,
            groupe: req.body.groupe,
            cin2: req.body.cin2,
            etat:req.body.etat,
            type:req.body.type
            
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
      },


      submitFormPresence: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            num_insc: req.body.num_insc,
            groupe: req.body.groupe,
            etat:req.body.etat,
            type:req.body.type,
            cause_demande:req.body.cause_demande
            
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
      },

      submitFormDuplicat: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            groupe: req.body.groupe,
            num_tel:req.body.num_tel,
            doc_admini:req.body.doc_admini,
            etat:req.body.etat,
            type:req.body.type
            
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
      },

      submitFormCorrection: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            groupe: req.body.groupe,
            num_tel:req.body.num_tel,
            doc_admini:req.body.doc_admini,
            faute:req.body.faute,
            etat:req.body.etat,
            type:req.body.type
            
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
      },

      submitFormRelevetNote: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            groupe: req.body.groupe,
            num_tel:req.body.num_tel,
            annee_univ:req.body.annee_univ,
            etat:req.body.etat,
            type:req.body.type
            
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
      },


      submitFormDemandeSortie: async (req, res) => {
        try {
          // Créer un nouvel étudiant à partir des données du formulaire dans le corps de la requête
          const nouvelForm = new Formulaire({
            ID: req.body.ID,
            nom: req.body.nom,
            prenom: req.body.prenom,
            groupe: req.body.groupe,
            num_tel:req.body.num_tel,
            cause_demande:req.body.cause_demande,
            etabli2:req.body.etabli2,
            etat:req.body.etat,
            type:req.body.type
            
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
      },



      findByEtatNon: async (req, res) => {
        try {
            const form = await Formulaire.find({ etat: "non_traite" });
    
            if (form.length === 0) {
                return res.status(404).json({ message: 'Aucun formumlaire avec etat Non Traitée trouvé' });
            }
    
            res.status(200).json({
                message: 'Formulaire avec etat Non Traitée récupérés avec succès',
                form: form,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },


    findByEtatOui: async (req, res) => {
      try {
          const form = await Formulaire.find({ etat: "traite" });
  
          if (form.length === 0) {
              return res.status(404).json({ message: 'Aucun formumlaire avec etat  Traitée trouvé' });
          }
  
          res.status(200).json({
              message: 'Formulaire avec etat Non Traitée récupérés avec succès',
              form: form,
          });
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
      }
  },


  findByEtatEnCours: async (req, res) => {
    try {
        const form = await Formulaire.find({ etat: "En_cours" });

        if (form.length === 0) {
            return res.status(404).json({ message: 'Aucun formumlaire avec etat  En Cours trouvé' });
        }

        res.status(200).json({
            message: 'Formulaire avec etat Non Traitée récupérés avec succès',
            form: form,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
    }
},

    
      
      
      
      
      

      






    };






module.exports = FormController;