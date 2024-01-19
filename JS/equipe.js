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
                            <div class="position"></div>
                            <img src="../images/direc.jpg" alt="profile-image">
                            <h3>DIRECTEUR</h3>
                            <p>HALIM SGHAIER</p>
                            <p>Email: <br><a href="mailto:sb-isimm@ieee.org">directeur@admin.com</a></p>
                        </div>
                        <div class="profil-box">
                            <div class="position"></div>
                            <img src="../images/direc2.jpg" alt="profile-image">
                            <h3>SECRETAIRE GENERAL</h3>
                            <p>KARIM SAYEB</p>
                            <p>Email:<br> <a href="mailto:atia.isimmclub@gmail.com">Karim.sayeb@isimm.u-monastir.tn</a></p>
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
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>RESPONSABLE DES EMPLOIS</h3>
                    <p>ADEL AYED</p>
                    <p>Email: <a href="mailto:directeur@admin.com">directeur@admin.com</a></p>
                </div>
                <div class="profil-box">
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>RESPONSABLE DES EMPLOIS</h3>
                    <p>ANIS SAYEDI</p>
                    <p>Email: <a href="mailto:autre@admin.com">sayedi.enis@gmail.com</a></p>
                </div>
                <div class="profil-box">
                    <img src="../images/SCO3.jpg" alt="profile-image">
                    <h3>SCOLARITÉ 3ÈME CYCLE</h3>
                    <p>FAEIK FRIGUI</p>
                    <p>Email: <a href="mailto:autre@admin.com">faeik.frigui@gmail.com</a></p>
                </div>
                <div class="profil-box">
                    <img src="../images/SCO1.jpg" alt="profile-image">
                    <h3>RESPONSABLE DES STAGES</h3>
                    <p>FAOUZI FEKIHH</p>
                    <p>Email: <a href="mailto:autre@admin.com">fekihfaouzi@gmail.com</a></p>
                </div>
                <div class="profil-box">
                    <div class="position"></div>
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>HAMDI MABROUK</h3>
                    <p>Email: <a href="mailto:autre@admin.com">hamdimabrouk305@gmail.com</a></p>
                    <div class="profile-bottom">
                        <p></p>
                    </div>
                </div>
                <div class="profil-box">
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>SCOLARITÉ 3IEME CYCLE</h3>
                    <p>ZOUARI SAFA</p>
                    <p>Email: <a href="mailto:autre@admin.com">safa.zouari@gmail.com</a></p>
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
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>RESPONSABLE GUICHET</h3>
                    <p>BOUAFSOUN BASSEM</p>
                    <p>Email: <a href="mailto:directeur@admin.com">bassem.bouafsoun@isimm.u-monastir.tn</a></p>
                </div>
                <div class="profil-box">
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>RESPONSABLE GUICHET</h3>
                    <p>LOTFI MARMOUCH</p>
                    <p>Email: <a href="mailto:directeur@admin.com">lotfi.marmouch@isimm.u-monastir.tn
                    </a></p>
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
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>RESPONSABLE FINANCE</h3>
                    <p>WAFA MEZRIOUI</p>
                    <p>Email: <a href="mailto:directeur@admin.com">wafa.mezrioui@gmail.com
                    </a></p>
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
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>BIBLIOTHÉCAIRE</h3>
                    <p>HAJER ABID</p>
                    <p>Email: <a href="mailto:directeur@admin.com">abidihajer11@gmail.com</a></p>
                </div>
                <div class="profil-box">
                    <img src="../images/person.jpg" alt="profile-image">
                    <h3>CONSERVATEUR BIBLIOTHÈQUE</h3>
                    <p>SAWSSEN BEN REJEB</p>
                    <p>Email: <a href="mailto:directeur@admin.com"> sawssen.benrejeb@gmail.com
                    </a></p>
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
