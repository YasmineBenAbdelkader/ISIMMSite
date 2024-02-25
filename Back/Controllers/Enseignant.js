const { Types } = require('mongoose');
const Enseignant = require("../Models/Enseignant"); 
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

const enseignantController = {
    //Ajout par admin 
    AjouterEnseignant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEnseignant = new Enseignant({
                cin: req.body.cin,
                num_inscription: req.body.num_inscription,
                nom: req.body.nom,
                prenom: req.body.prenom,
                grade: req.body.grade,
                //chefDep: req.body.chefDep,
                matricule: req.body.matricule,

            });

            const EnseignantEnregistre = await nouvelEnseignant.save();

            console.log("Enseignant ajouté :", EnseignantEnregistre);

            res.status(201).json({
                message: 'Enseignant ajouté avec succès',
                Enseignant: EnseignantEnregistre,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'enseignant: ${error.message}` });
        }
    },
    // Inscription enseignant
    Inscrire: async (req, res) => {
        try {
          const { mot_de_passe, cin, ...rest } = req.body;
      
          if (!mot_de_passe) {
            return res.status(400).json({ message: "Password is required" });
          }
      
          const salt = bcrypt.genSaltSync(10)
          const hashpassword = bcrypt.hashSync(req.body.mot_de_passe, salt)
      
          // Chercher un étudiant avec le même cin
          const existingEnseignant = await Enseignant.findOneAndUpdate(
            { cin: cin },
            {
              adresse_email: req.body.adresse_email,
              num_telephone: req.body.num_telephone,
              mot_de_passe: hashpassword, 
              inscri: true
            },
            { new: true, upsert: false }
          );
      
          if (!existingEnseignant) {
            return res.status(400).json({ message: "Inscription impossible, le numéro d'identification n'existe pas" });
          }
      
          const token = generateToken(existingEnseignant);
      
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
            message: 'Informations de l\'enseignant mises à jour avec succès',
            enseignant: existingEnseignant,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue lors de la mise à jour des informations de l'enseignant: ${error.message}` });
        }
    },

    // Enregistrement Fiche renseignement enseignant
    CompleterProfil : async (req, res) => {
        try {
            const enseignantId = req.params.id;
             // Supposons que l'identifiant de l'étudiant soit passé en tant que paramètre dans l'URL
  
            // Rechercher l'étudiant dans la base de données
            const enseignant = await Enseignant.findById(enseignantId);
  
            if (!enseignant) {
                return res.status(404).json({ message: "enseignant non trouvé" });
            }
  
            // Mettre à jour les champs du profil
            enseignant.photo = req.file ? req.file.filename : null || enseignant.photo;
            enseignant.date_naissance = req.body.date_naissance || enseignant.date_naissance;
            enseignant.lieu_naissance = req.body.lieu_naissance || enseignant.lieu_naissance;
            enseignant.nationalité = req.body.nationalité || enseignant.nationalité;
            enseignant.sexe = req.body.sexe || enseignant.sexe;
            enseignant.etat_civil = req.body.etat_civil || enseignant.etat_civil;
            enseignant.num_CNSS = req.body.num_CNSS || enseignant.num_CNSS;
            enseignant.adresse = req.body.adresse || enseignant.adresse;
            enseignant.code_postal = req.body.code_postal || enseignant.code_postal;
            enseignant.cv = req.file ? req.file.filename : null || enseignant.cv;
            enseignant.specialite = req.body.specialite || enseignant.specialite;
            enseignant.date_embauche = req.body.date_embauche || enseignant.date_embauche;
            enseignant.cours = req.files['cours'] ? req.files['cours'].map(cours => cours.filename) : null || enseignant.cours;
           

            // Sauvegarder les modifications dans la base de données
            const enseignantMisAJour = await enseignant.save();
  
            res.status(200).json({
                message: 'Profil de l\'étudiant complété avec succès',
                enseignant: enseignantMisAJour,
            });
            const enseignants = await Enseignant.find({}, { _id: 0 });
    
            res.status(200).json({
                message: 'Liste de tous les enseignants récupérée avec succès',
                enseignants: enseignants.map(enseignant => ({
                    cin: enseignant.cin,
                    nom: enseignant.nom,
                    prenom: enseignant.prenom,
                    adresse_email: enseignant.adresse_email,
                    num_telephone: enseignant.num_telephone,
                    grade: enseignant.grade,
                    photo: enseignant.photo,
                    date_naissance: enseignant.date_naissance,
                    adresse: enseignant.adresse,
                    diplomes: enseignant.diplomes,
                    specialite: enseignant.specialite,
                    date_embauche: enseignant.date_embauche,
                    cours: enseignant.cours,
                    enregistre: enseignant.enregistre,
                    chefDep: enseignant.chefDep
                }))
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },



    find4Enseignant : async (req, res) => {
        try {
            const enseignants = await Enseignant.find({}, { _id: 0 });
    
            res.status(200).json({
                message: 'Liste de tous les enseignants récupérée avec succès',
                enseignants: enseignants.map(enseignant => ({
                    cin: enseignant.cin,
                    nom: enseignant.nom,
                    prenom: enseignant.prenom,
                    //adresse_email: enseignant.adresse_email,
                    //num_telephone: enseignant.num_telephone,
                    grade: enseignant.grade,
                    //photo: enseignant.photo,
                    //date_naissance: enseignant.date_naissance,
                    //adresse: enseignant.adresse,
                    //diplomes: enseignant.diplomes,
                    //specialite: enseignant.specialite,
                   // date_embauche: enseignant.date_embauche,
                    //cours: enseignant.cours,
                    //enregistre: enseignant.enregistre,
                    chefDep: enseignant.chefDep
                }))
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue lors de la complétion du profil de l'étudiant: ${error.message}` });
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
  

    SupprimerEnseignant: async (req, res) => {
        try {
          const enseignantID = req.params.cin;
          const enseignantSupprime = await Enseignant.findOneAndDelete({ cin: enseignantID });
      
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

    // Récupérer un enseignant par son ID
   

    EnregistrerEnseignant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEnseignant = new Enseignant({
                cin: req.body.cin,
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
            const enseignantId = req.params.id; // Supposons que l'ID de l'enseignant soit passé en tant que paramètre dans l'URL

            // Rechercher l'enseignant dans la base de données par son ID en utilisant findById de Mongoose
            const enseignant = await Enseignant.findById(enseignantId);

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

    findByChefDepInfo: async (req, res) => {
        try {
            const enseignantsInfo = await Enseignant.find({ chefDep: "INFO" });
    
            if (enseignantsInfo.length === 0) {
                return res.status(404).json({ message: 'Aucun enseignant avec ChefDep INFO trouvé' });
            }
    
            res.status(200).json({
                message: 'Enseignants avec ChefDep INFO récupérés avec succès',
                enseignantsInfo: enseignantsInfo,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },

    findByChefDepMath: async (req, res) => {
        try {
            const enseignantsMath = await Enseignant.find({ chefDep: "MATH" });
    
            if (enseignantsMath.length === 0) {
                return res.status(404).json({ message: 'Aucun enseignant avec ChefDep MATH trouvé' });
            }
    
            res.status(200).json({
                message: 'Enseignants avec ChefDep MATH récupérés avec succès',
                enseignantsMath: enseignantsMath,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },
    
    findByChefDepEL: async (req, res) => {
        try {
            const enseignantsEL = await Enseignant.find({ chefDep: "EL" });
    
            if (enseignantsEL.length === 0) {
                return res.status(404).json({ message: 'Aucun enseignant avec ChefDep EL trouvé' });
            }
    
            res.status(200).json({
                message: 'Enseignants avec ChefDep EL récupérés avec succès',
                enseignantsEL: enseignantsEL,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },


    getAllEnseignants: async (req, res) => {
        try {
            // Utiliser la méthode find de Mongoose sans critères de recherche
            const enseignants = await Enseignant.find();
    
            if (enseignants.length === 0) {
                return res.status(404).json({ message: 'Aucun enseignant trouvé' });
            }
    
            res.status(200).json({
                message: 'Tous les enseignants récupérés avec succès',
                enseignants: enseignants,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
    },

    findByGrade: async (req, res) => {
        try {
            const grade = req.params.grade;
    
            // Recherche des enseignants par leur grade en utilisant find de Mongoose
            const enseignants = await Enseignant.find({ grade: grade });
    
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
