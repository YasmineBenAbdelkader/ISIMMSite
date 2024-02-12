const express = require("express");
const Route = express.Router();

const Form = require("../Controllers/formulaire"); // Assurez-vous que le chemin d'accès vers votre contrôleur est correct


Route.post('/mutationCPI', Form.submitFormMutation);//licence w prepa nafsha 
Route.post('/Presence', Form.submitFormPresence);
Route.post('/sortie', Form.submitFormDemandeSortie);
Route.post('/duplicata', Form.submitFormDuplicat);
Route.post('/correctionDoc', Form.submitFormCorrection);
Route.post('/relevetNote', Form.submitFormRelevetNote);//meme form par rang /par S1 // demande diplome
Route.get("/findByEtatNon", Form.findByEtatNon);
Route.get("/findByEtatOui", Form.findByEtatOui);
Route.get("/findByEtatEnCours", Form.findByEtatEnCours);















module.exports = Route;