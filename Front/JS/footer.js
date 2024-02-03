document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.querySelector('footer'); // Updated selector
    const footerHtmlPath = '../html/Footer.html';

    fetch(footerHtmlPath)
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Erreur lors du chargement du pied de page:', error));
});
