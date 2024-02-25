const express = require("express");
const Route = express.Router();
const uploadFile = require('../middlewares/uploadFile');
const Staff = require("../Controllers/Staff"); 


Route.post("/create", uploadFile.single('photo'), Staff.AjouterStaffAdministratif);
Route.get("/findAll", Staff.findAllStaffAdministratif);
Route.get("/direction", Staff.findByPosteDirection);
Route.get("/scolarite", Staff.findByPosteSco);
Route.get("/guichet", Staff.findByPosteGuichet);
Route.get("/biblio", Staff.findByPosteBiblio);
Route.get("/finance", Staff.findByPosteFinance);
Route.get("/:id", Staff.findByIdStaffAdministratif);


Route.delete("/:cin", Staff.supprimerMembreStaffAdministratif);
Route.put("/updatepost/:id", Staff.updatePoste);
Route.get("/findByKeyarea/:keyArea", Staff.findByKeyArea); // me temshih 


module.exports = Route;