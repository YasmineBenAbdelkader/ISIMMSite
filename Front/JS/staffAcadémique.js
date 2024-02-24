document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded.");

    // Function to load or hide the direction content
    function toggleDirectionContent() {
        console.log("Toggling direction content.");

        // Check if the content is already added
        var existingContent = document.getElementById('direc');
        if (existingContent) {
            existingContent.remove(); // Remove existing content
        } else {
            var directionContent = `
                <section class="content-1" id="direc">
                    <div class="container">
                        <div class="profil-box">
                            
                        </div>
                        <div class="profil-box">
                            
                        </div>
                    </div>
                </section>
            `;

            // Get the direction content element
            var directionContentElement = document.getElementById('direction-content');

            // Add the new content after the existing paragraph
            directionContentElement.insertAdjacentHTML('afterend', directionContent);
        }
    }

    

    // Add an event listener to the direction link
    var lienDirection = document.getElementById('lienDirection');
    if (lienDirection) {
        lienDirection.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from triggering a redirection

            // Toggle the direction content
            toggleDirectionContent();
            console.log("Click event on the direction link.");
        });
    } else {
        console.error("Direction link not found.");
    }

    function toggleScolarityContent() {
        console.log("Toggling scolarity content.");

        // Check if the content is already added
        var existingContent = document.getElementById('scolarity');
        if (existingContent) {
            existingContent.remove(); // Remove existing content
        } else {
            var scolarityContent = `
                <section class="content-1" id="scolarity">
                <div class="container">
                <div class="profil-box">
                    
                </div>
                <div class="profil-box">
                    
                </div>
                <div class="profil-box">
                   
                </div>
                <div class="profil-box">
                   
                </div>
                <div class="profil-box">
                    
                </div>
                <div class="profil-box">
                   
                </div>
            </div>
                </section>
            `;

            // Get the scolarity content element
            var scolarityContentElement = document.getElementById('scolarity-content');

            // Add the new content after the existing paragraph
            scolarityContentElement.insertAdjacentHTML('afterend', scolarityContent);
        }
    }

    // Add an event listener to the scolarity link
    var lienScolarite = document.getElementById('lienScolarite');
    if (lienScolarite) {
        lienScolarite.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from triggering a redirection

            // Toggle the scolarity content
            toggleScolarityContent();
            console.log("Click event on the scolarity link.");
        });
    } else {
        console.error("Scolarity link not found.");
    }

    // Function to load or hide the Guichet content
    function toggleGuichetContent() {
        console.log("Toggling Guichet content.");

        // Check if the content is already added
        var existingContent = document.getElementById('Guichet');
        if (existingContent) {
            existingContent.remove(); // Remove existing content
        } else {
            var guichetContent = `
                <section class="content-1" id="Guichet">
                <div class="container">
                <div class="profil-box">
                    
                </div>
                <div class="profil-box">
                    
                </div>
                </div>
                </section>
            `;

            // Get the Guichet content element
            var guichetContentElement = document.getElementById('Guichet-content');

            // Add the new content after the existing paragraph
            guichetContentElement.insertAdjacentHTML('afterend', guichetContent);
        }
    }

    // Function to load or hide the Finance content
    function toggleFinanceContent() {
        console.log("Toggling Finance content.");

        // Check if the content is already added
        var existingContent = document.getElementById('Finance');
        if (existingContent) {
            existingContent.remove(); // Remove existing content
        } else {
            var financeContent = `
                <section class="content-1" id="Finance">
                <div class="container">
                <div class="profil-box">
                    
                </div>
                </div>
                </section>
            `;

            // Get the Finance content element
            var financeContentElement = document.getElementById('Finance-content');

            // Add the new content after the existing paragraph
            financeContentElement.insertAdjacentHTML('afterend', financeContent);
        }
    }

    // Function to load or hide the Bibliothèque content
    function toggleBiblioContent() {
        console.log("Toggling Bibliothèque content.");

        // Check if the content is already added
        var existingContent = document.getElementById('Biblio');
        if (existingContent) {
            existingContent.remove(); // Remove existing content
        } else {
            var biblioContent = `
                <section class="content-1" id="Biblio">
                <div class="container">
                <div class="profil-box">
                    
                </div>
                <div class="profil-box">
                    
                </div>
                </div>
                </section>
            `;

            // Get the Bibliothèque content element
            var biblioContentElement = document.getElementById('biblio-content');

            // Add the new content after the existing paragraph
            biblioContentElement.insertAdjacentHTML('afterend', biblioContent);
        }
    }

    // Add event listeners to the Guichet, Finance, and Bibliothèque links
    var lienGuichet = document.getElementById('lienGuichet');
    if (lienGuichet) {
        lienGuichet.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from triggering a redirection
            toggleGuichetContent();
            console.log("Click event on the Guichet link.");
        });
    } else {
        console.error("Guichet link not found.");
    }

    var lienFinance = document.getElementById('lienFinance');
    if (lienFinance) {
        lienFinance.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from triggering a redirection
            toggleFinanceContent();
            console.log("Click event on the Finance link.");
        });
    } else {
        console.error("Finance link not found.");
    }

    var lienBiblio = document.getElementById('lienBiblio');
    if (lienBiblio) {
        lienBiblio.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from triggering a redirection
            toggleBiblioContent();
            console.log("Click event on the Bibliothèque link.");
        });
    } else {
        console.error("Bibliothèque link not found.");
    }
});



/*

document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded.");

    // Function to load or hide the direction content
    function toggleDirectionContent() {
        console.log("Toggling direction content.");
        const baseUrl = "http://localhost:5000";
        axios.get(baseUrl + '/staff/direction') // Utiliser la variable baseUrl pour la requête
            .then(response => {
                // Handle successful response
                console.log('Response from backend:', response.data);

                // Get the container where you want to append the actualites
                const staffContainer = document.getElementById('direc');
                if (staffContainer) {
                    staffContainer.innerHTML = ''; // Clear existing content
                    response.data.staff.forEach(staff => { // Utiliser response.data.staff au lieu de response.data.staffs
                        const staffDiv = document.createElement('div');
                        staffDiv.classList.add('container');
                        staffDiv.innerHTML = `
                            <div class="container">
                                <div class="profil-box">
                                    <div class="position"></div>
                                    <img src="${baseUrl}/${staff.photo}" alt="profile-image"> <!-- Utiliser l'URL de base pour les images -->
                                    <h3>${staff.poste}</h3>
                                    <p>${staff.nom} ${staff.prenom}</p>
                                    <p>Email: <br><a href="mailto:${staff.email}">${staff.email}</a></p>
                                </div>
                            </div>
                        `;
                        staffContainer.appendChild(staffDiv);
                    });
                } else {
                    console.error("Events container not found.");
                }
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching data:', error);
            });
    }

    // Add an event listener to the direction link
    var lienDirection = document.getElementById('lienDirection');
    if (lienDirection) {
        lienDirection.addEventListener('click', function (event) { // Renommer le paramètre staff en event
            event.preventDefault(); // Prevent the link from triggering a redirection

            // Toggle the direction content
            toggleDirectionContent();
            console.log("Click event on the direction link.");
        });
    } else {
        console.error("Direction link not found.");
    }
});
*/