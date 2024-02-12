import {ObtenirDernieresActualites} from './axios/Actu';

// Appel à la fonction ObtenirDernieresActualites() au chargement de la page
window.onload = async function() {
    const actualitesContainer = document.getElementById('actualites-container');

    try {
        const actualites = await ObtenirDernieresActualites();

        // Mettre à jour le contenu HTML avec les données récupérées
        actualites.forEach(actualite => {
            const actualiteElement = document.createElement('div');
            actualiteElement.classList.add('actualite');
            actualiteElement.innerHTML = `
                <img src="${actualite.image}" alt="Image Actualité">
                <h3>${actualite.titre}</h3>
                <p>${actualite.description}</p>
                <p>Date de publication: ${actualite.date}</p>
            `;
            actualitesContainer.appendChild(actualiteElement);
        });
    } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des actualités :', error);
    }
};
