// ... (Autres importations)

const { Types } = require('mongoose');
const Etudiant = require("../Models/Etudiant");
const bcrypt = require('bcrypt'); // for hashing passwords





const etudiantController = {
    AjouterEtudiant: async (req, res) => {
        try {
            console.log("Données reçues :", req.body);

            const nouvelEtudiant = new Etudiant({
                ID: req.body.ID,
                num_inscription: req.body.num_inscription,
                nom: req.body.nom,
                prenom: req.body.prenom,
                // Autres champs...
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

    EnregistrerEtudiant: async (req, res) => {
      try {
          console.log("Données reçues :", req.body);

          const nouvelEtudiant = new Etudiant({
            ID: req.body.ID,
            num_inscription: req.body.num_inscription,
            photo: req.body.photo,
            nom: req.body.nom,
            prenom: req.body.prenom,
            date_naissance: req.body.date_naissance,
            lieu_naissance: req.body.lieu_naissance,
            nationalité: req.body.nationalité,
            sexe: req.body.sexe,
            etat_civil: req.body.etat_civil,
            nom_prenom_jeune_fille: req.body.nom_prenom_jeune_fille,
            num_CNSS: req.body.num_CNSS,
            etat_militaire: req.body.etat_militaire,
            adresse: req.body.adresse,
            code_postal: req.body.code_postal,
            num_telephone: req.body.num_telephone,
            adresse_email: req.body.adresse_email,
            profession: req.body.profession,
            cycle: req.body.cycle,
            spécialité: req.body.spécialité,
            niveau_etude: req.body.niveau_etude,
            TD: req.body.TD,
            TP: req.body.TP,
            situation: req.body.situation,
            ancien_etab: req.body.ancien_etab,
            annee_bac: req.body.annee_bac,
            session_bac: req.body.session_bac,
            section_bac: req.body.section_bac,
            mention_bac: req.body.mention_bac,
            moyenne_bac: req.body.moyenne_bac,
            pays_bac: req.body.pays_bac,
            nom_pére: req.body.nom_pére,
            prénom_pére: req.body.prénom_pére,
            profession_pére: req.body.profession_pére,
            etab_employeur_pére: req.body.etab_employeur_pére,
            nom_mére: req.body.nom_mére,
            prénom_mére: req.body.prénom_mére,
            profession_mére: req.body.profession_mére,
            etab_employeur_mére: req.body.etab_employeur_mére,
            adresse_parents: req.body.adresse_parents,
            code_postal_parents: req.body.code_postal_parents,
            telephone_parent: req.body.telephone_parent,
            nom_conjoint: req.body.nom_conjoint,
            prénom_conjoint: req.body.prénom_conjoint,
            profession_conjoint: req.body.profession_conjoint,
            etab_employeur_conjoint: req.body.etab_employeur_conjoint,
            nb_enfant: req.body.nb_enfant,
            mot_de_passe: req.body.mot_de_passe,
            inscri: req.body.inscri,
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

  SupprimerEtudiant: async (req, res) => {
    try {
      const etudiantID = req.params.id;
      const etudiantSupprime = await Etudiant.findOneAndDelete({ _id: etudiantID });
  
      if (!etudiantSupprime) {
        return res.status(404).json({ message: 'Aucun étudiant trouvé avec cet ID' });
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

  findByCycleSpecialiteNiveau: async (req, res) => {
      try {
        const { cycle, spécialité, niveau_etude } = req.query;
    
        // Construire l'objet de filtre en fonction des paramètres reçus
        const filter = {
          cycle: cycle,
          spécialité: spécialité,
          niveau_etude: niveau_etude,
        };
    
          

          const etudiants = await Etudiant.find(filter);

          console.log('Result:', etudiants);
    
        res.status(200).json({
          message: 'Liste des étudiants récupérée avec succès',
          etudiants: etudiants,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
      }
    },
    // Importez le modèle Etudiant s'il n'est pas déjà importé
// const Etudiant = require('../chemin/vers/le/modele/Etudiant');

    findAllEtudiants : async (req, res) => {
        try {
          const etudiants = await Etudiant.find();

          res.status(200).json({
            message: 'Liste des étudiants récupérée avec succès',
            etudiants: etudiants,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
        }
      },
    
// Exportez la fonction pour pouvoir l'utiliser dans votre routeur ou ailleurs


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


 registerEtudiant : async (req, res) => {
  try {
    // Extract data from the request body
    const { ID, nom, prenom, email, mot_de_passe } = req.body;

    // Check if the provided ID already exists in the database
    const existingEtudiant = await Etudiant.findOne({ ID });
    if (existingEtudiant) {
      return res.status(400).json({ message: 'ID already exists, choose a different one.' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    // Create a new Etudiant instance
    const newEtudiant = new Etudiant({
      ID,
      nom,
      prenom,
      adresse_email: email,
      mot_de_passe: hashedPassword,
      inscri: true // Assuming inscri should be set to true for registered students
    });

    // Save the new Etudiant to the database
    await newEtudiant.save();

    // Respond with success message
    res.status(201).json({ message: 'Étudiant inscrit avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Une erreur est survenue: ${error.message}` });
  }
 },


 // Assuming the Etudiant.Inscrire function is in your Etudiant controller

 Inscrire : async (req, res) => {
  try {
    console.log("Données reçues :", req.body);

    // Manually parse JSON from the request body
    const requestBody = JSON.parse(req.body);

    // Check if the provided ID already exists in the admin's database
    const existingEtudiant = await Etudiant.findOne({ ID: requestBody.ID });
    if (existingEtudiant) {
      const nouvelEtudiant = new Etudiant({
        ID: requestBody.ID,
        nom: requestBody.nom,
        prenom: requestBody.prenom,
        mot_de_passe: requestBody.mot_de_passe
      });

      const etudiantEnregistre = await nouvelEtudiant.save();

      console.log("Étudiant ajouté :", etudiantEnregistre);

      return res.status(201).json({
        message: 'Étudiant ajouté avec succès',
        etudiant: etudiantEnregistre,
      });
    }

    return res.status(400).json({ message: 'ID does not exist.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Une erreur est survenue lors de l'ajout de l'étudiant: ${error.message}` });
  }
},

};

module.exports = etudiantController;
