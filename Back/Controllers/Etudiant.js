const { Types } = require('mongoose');
const Etudiant = require("../Models/Etudiant");
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");
const { generateToken } = require('../middlewares/auth');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3635bf540a042a",
    pass: "29a3bcd10fd439"
  }
});


const etudiantController = {
    //Ajout par admin 
    AjouterEtudiant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEtudiant = new Etudiant({
                cin: req.body.cin,
                num_inscription: req.body.num_inscription,
                nom: req.body.nom,
                prenom: req.body.prenom,
           
            });

            const etudiantEnregistre = await nouvelEtudiant.save();

            console.log("Étudiant ajouté :", etudiantEnregistre);

            res.status(201).json({
                message: 'Étudiant ajouté avec succès',
                etudiant: etudiantEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'étudiant: ${error.message}` });
        }
    },
    // Inscription Etudiant
    Inscrire: async (req, res) => {
      try {
        const { mot_de_passe, cin, ...rest } = req.body;
    
        if (!mot_de_passe) {
          return res.status(400).json({ message: "Password is required" });
        }
    
        const salt = bcrypt.genSaltSync(10)
        const hashpassword = bcrypt.hashSync(req.body.mot_de_passe, salt)
    
        // Chercher un étudiant avec le même cin
        const existingEtudiant = await Etudiant.findOneAndUpdate(
          { cin: cin },
          {
            Poste: req.body.Poste,
            adresse_email: req.body.adresse_email,
            num_telephone: req.body.num_telephone,
            mot_de_passe: hashpassword, 
            inscri: true
          },
          { new: true, upsert: false }
        );
    
        if (!existingEtudiant) {
          return res.status(400).json({ message: "Inscription impossible, le numéro d'identification n'existe pas" });
        }
    
        const token = generateToken(existingEtudiant);
    
        transport.sendMail({
          from: "myapp@gmail.com",
          to: rest.adresse_email, 
          cc: '',
          bcc: "",
          subject: "Welcome " + rest.nom,
          text: "bonjour ",
          html: `<!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>Welcome Email</title>
          </head>
          <body style="text-align: center;">
            <h2>Hello ${rest.nom}! </h2>
            <p>You have registred successfully </p>
            <h3>Your login details are as follows:</h3>
            <p>Username: ${rest.prenom} ${rest.nom} </p>
            <p>Email: ${rest.adresse_email}</p>
          </body>
          </html>`,
        }, function (err, info) {
          if (err) {
            console.log("error:", err)
          } else {
            console.log("Email Send successfully:", info + reponse, token)
          }
        });
    
        res.status(200).json({
          message: 'Informations de l\'étudiant mises à jour avec succès',
          etudiant: existingEtudiant,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Une erreur est survenue lors de la mise à jour des informations de l'étudiant: ${error.message}` });
      }
    },

    // Enregistrement Fiche renseignement etudiant
    CompleterProfil: async (req, res) => {
      try {
          const etudiantId = req.params._id; // Supposons que l'identifiant de l'étudiant soit passé en tant que paramètre dans l'URL

          // Rechercher l'étudiant dans la base de données
          const etudiant = await Etudiant.findById(etudiantId);

          if (!etudiant) {
              return res.status(404).json({ message: "Étudiant non trouvé" });
          }

          // Mettre à jour les champs du profil
          etudiant.photo = req.file ? req.file.filename : null || etudiant.photo;
          etudiant.date_naissance = req.body.date_naissance || etudiant.date_naissance;
          etudiant.lieu_naissance = req.body.lieu_naissance || etudiant.lieu_naissance;
          etudiant.nationalité = req.body.nationalité || etudiant.nationalité;
          etudiant.sexe = req.body.sexe || etudiant.sexe;
          etudiant.etat_civil = req.body.etat_civil || etudiant.etat_civil;
          etudiant.nom_prenom_jeune_fille = req.body.nom_prenom_jeune_fille || etudiant.nom_prenom_jeune_fille;
          etudiant.num_CNSS = req.body.num_CNSS || etudiant.num_CNSS;
          etudiant.etat_militaire = req.body.etat_militaire || etudiant.etat_militaire;
          etudiant.adresse = req.body.adresse || etudiant.adresse;
          etudiant.code_postal = req.body.code_postal || etudiant.code_postal;
          etudiant.profession = req.body.profession || etudiant.profession;
          etudiant.cycle = req.body.cycle || etudiant.cycle;
          etudiant.spécialité = req.body.spécialité || etudiant.spécialité;
          etudiant.niveau_etude = req.body.niveau_etude || etudiant.niveau_etude;
          etudiant.TD = req.body.TD || etudiant.TD;
          etudiant.TP = req.body.TP || etudiant.TP;
          etudiant.situation = req.body.situation || etudiant.situation;
          etudiant.ancien_etab = req.body.ancien_etab || etudiant.ancien_etab;
          etudiant.annee_bac = req.body.annee_bac || etudiant.annee_bac;
          etudiant.session_bac = req.body.session_bac || etudiant.session_bac;
          etudiant.section_bac = req.body.section_bac || etudiant.section_bac;
          etudiant.mention_bac = req.body.mention_bac || etudiant.mention_bac;
          etudiant.moyenne_bac = req.body.moyenne_bac || etudiant.moyenne_bac;
          etudiant.pays_bac = req.body.pays_bac || etudiant.pays_bac;
          etudiant.nom_pére = req.body.nom_pére || etudiant.nom_pére;
          etudiant.prénom_pére = req.body.prénom_pére || etudiant.prénom_pére;
          etudiant.profession_pére = req.body.profession_pére || etudiant.profession_pére;
          etudiant.etab_employeur_pére = req.body.etab_employeur_pére || etudiant.etab_employeur_pére;
          etudiant.nom_mére = req.body.nom_mére || etudiant.nom_mére;
          etudiant.prénom_mére = req.body.prénom_mére || etudiant.prénom_mére;
          etudiant.profession_mére = req.body.profession_mére || etudiant.profession_mére;
          etudiant.etab_employeur_mére = req.body.etab_employeur_mére || etudiant.etab_employeur_mére;
          etudiant.adresse_parents = req.body.adresse_parents || etudiant.adresse_parents;
          etudiant.code_postal_parents = req.body.code_postal_parents || etudiant.code_postal_parents;
          etudiant.telephone_parent = req.body.telephone_parent || etudiant.telephone_parent;
          etudiant.nom_conjoint = req.body.nom_conjoint || etudiant.nom_conjoint;
          etudiant.prénom_conjoint = req.body.prénom_conjoint || etudiant.prénom_conjoint;
          etudiant.profession_conjoint = req.body.profession_conjoint || etudiant.profession_conjoint;
          etudiant.etab_employeur_conjoint = req.body.etab_employeur_conjoint || etudiant.etab_employeur_conjoint;
          etudiant.nb_enfant = req.body.nb_enfant || etudiant.nb_enfant;
          

          // Sauvegarder les modifications dans la base de données
          const etudiantMisAJour = await etudiant.save();

          res.status(200).json({
              message: 'Profil de l\'étudiant complété avec succès',
              etudiant: etudiantMisAJour,
          });
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue lors de la complétion du profil de l'étudiant: ${error.message}` });
      }
  },

  
  SupprimerEtudiant: async (req, res) => {
    try {
      const etudiantID = req.params.cin;
      const etudiantSupprime = await Etudiant.findOneAndDelete({ cin: etudiantID });
  
      if (!etudiantSupprime) {
        return res.status(404).json({ message: 'Aucun étudiant trouvé avec cet CIN' });
      }
  
      res.status(200).json({
        message: 'Étudiant supprimé avec succès',
        etudiant: etudiantSupprime,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
    }
  },

  findEtudiantByCriteria: async (req, res) => {
    try {
        const { cycle, spécialité, niveau_etude } = req.body;

        // Vérification de l'existence des paramètres obligatoires
        if (!cycle || !spécialité || !niveau_etude) {
            return res.status(400).json({ message: "Cycle, spécialité et niveau d'étude sont des paramètres obligatoires" });
        }

        // Construire l'objet de filtre en fonction des paramètres reçus
        const filter = {
            cycle: cycle,
            spécialité: spécialité,
            niveau_etude: niveau_etude,
        };

        // Recherche des étudiants en fonction des critères spécifiés
        const etudiants = await Etudiant.find(filter);

        res.status(200).json({
            message: 'Liste des étudiants récupérée avec succès',
            etudiants: etudiants,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
    }
},


      findByIdEtudiant: async (req, res) => {
        try {
          let etudiantID = req.params.id;
      
          // Remove leading/trailing whitespaces and newline characters
          etudiantID = etudiantID.trim();
      
          // Recherche de l'étudiant par son ID using Mongoose's findById
          const etudiant = await Etudiant.findById(etudiantID);
      
          if (!etudiant) {
            return res.status(404).json({ message: 'Aucun étudiant trouvé avec cet ID' });
          }
      
          res.status(200).json({
            message: 'Étudiant récupéré avec succès',
            etudiant: etudiant,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
      },

      findAllEtudiant: async (req, res) => {
       try {
          const etudiants = await Etudiant.find({}, { _id: 0 });

             //Utilisation de la méthode find() pour récupérer tous les étudiants
  
            res.status(200).json({
                message: 'Liste de tous les étudiants récupérée avec succès',
                etudiants: etudiants.map(etudiant => ({
                    cin: etudiant.cin,
                    nom: etudiant.nom,
                    prenom: etudiant.prenom,
                    poste: etudiant.poste,
                    adresse_email: etudiant.adresse_email,
                    num_telephone: etudiant.num_telephone,
                    num_inscription: etudiant.num_inscription,
                    photo: etudiant.photo,
                    date_naissance: etudiant.date_naissance,
                    lieu_naissance: etudiant.lieu_naissance,
                    nationalité: etudiant.nationalité,
                    sexe: etudiant.sexe,
                    etat_civil: etudiant.etat_civil,
                    nom_prenom_jeune_fille: etudiant.nom_prenom_jeune_fille,
                    num_CNSS: etudiant.num_CNSS,
                    etat_militaire: etudiant.etat_militaire,
                    adresse: etudiant.adresse,
                    code_postal: etudiant.code_postal,
                    profession: etudiant.profession,
                    cycle: etudiant.cycle,
                    spécialité: etudiant.spécialité,
                    niveau_etude: etudiant.niveau_etude,
                    TD: etudiant.TD,
                    TP: etudiant.TP,
                    situation: etudiant.situation,
                    ancien_etab: etudiant.ancien_etab,
                    annee_bac: etudiant.annee_bac,
                    session_bac: etudiant.session_bac,
                    mention_bac: etudiant.mention_bac,
                    moyenne_bac: etudiant.moyenne_bac,
                    pays_bac: etudiant.pays_bac,
                    nom_pére: etudiant.nom_pére,
                    prénom_pére: etudiant.prénom_pére,
                    profession_pére: etudiant.profession_pére,
                    etab_employeur_pére: etudiant.etab_employeur_pére,
                    nom_mére: etudiant.nom_mére,
                    prénom_mére: etudiant.prénom_mére,
                    profession_mére: etudiant.profession_mére,
                    etab_employeur_mére: etudiant.etab_employeur_mére,
                    adresse_parents: etudiant.adresse_parents,
                    code_postal_parents: etudiant.code_postal_parents,
                    telephone_parent: etudiant.telephone_parent,
                    nom_conjoint: etudiant.nom_conjoint,
                    prénom_conjoint: etudiant.prénom_conjoint,
                    profession_conjoint: etudiant.profession_conjoint,
                    etab_employeur_conjoint: etudiant.etab_employeur_conjoint,
                    nb_enfant: etudiant.nb_enfant,
                    inscri: etudiant.inscri
                }))
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    

    find4Etudiant: async (req, res) => {
      try {
         const etudiants = await Etudiant.find({}, { _id: 0 });

            //Utilisation de la méthode find() pour récupérer tous les étudiants
 
           res.status(200).json({
               message: 'Liste de tous les étudiants récupérée avec succès',
               etudiants: etudiants.map(etudiant => ({
                   cin: etudiant.cin,
                   nom: etudiant.nom,
                   prenom: etudiant.prenom,
                   num_inscription: etudiant.num_inscription,
                   //adresse_email: etudiant.adresse_email,
                   //num_telephone: etudiant.num_telephone,
                  
               }))
           });
       } catch (error) {
           console.error(error);
           res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
       }
   },
   
    /*findAllEtudiant: async (req, res) => {
      try {
          const etudiants = await Etudiant.find();
          res.status(200).json({ etudiants });
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue lors de la récupération des etudiants: ${error.message}` });
      }
  },*/

    
    
    


};

module.exports = etudiantController;
