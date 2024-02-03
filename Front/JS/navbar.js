// navbar.js
document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.querySelector('.header'); // Updated selector
    const navbarHtmlPath = '../html/Navbar.html'; // Update the path if necessary

    fetch(navbarHtmlPath)
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html;
        })
        .catch(error => console.error('Erreur lors du chargement de la barre de navigation:', error));
});
