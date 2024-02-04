const express = require("express");
const Route = express.Router();

const Staff = require("../Controllers/Staff"); 


Route.post("/create", Staff.AjouterStaffAdministratif);
Route.get("/findAll", Staff.findAllStaffAdministratif);
Route.get("/:id", Staff.findByIdStaffAdministratif);


Route.delete("/:id", Staff.supprimerMembreStaffAdministratif);
Route.put("/updatepost/:id", Staff.updatePoste);
Route.get("/findByKeyarea/:keyArea", Staff.findByKeyArea); // me temshih 


module.exports = Route;