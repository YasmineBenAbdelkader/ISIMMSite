function afficherContenu(buttonId) {
    // Masquer toutes les sections
    document.getElementById("sectionInformatique").style.display = "none";
    document.getElementById("sectionElectronique").style.display = "none";

    // Récupérer l'ID de la section à afficher à partir de l'attribut data du bouton
    var sectionId = document.getElementById(buttonId).getAttribute("data-section");

    // Afficher la section correspondante
    document.getElementById(sectionId).style.display = "block";
}