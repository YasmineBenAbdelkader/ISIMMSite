document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("ajouterEtudiantForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        
        const formData = new FormData(form); // Récupérer les données du formulaire
        
        fetch('http://localhost:5050/etudiant/ajouter-etudiant', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Si la réponse est OK, retournez les données JSON
            }
            throw new Error('Erreur lors de la requête.');
        })
        .then(data => {
            // Traitez les données JSON retournées par le back-end
            console.log(data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    });
});
