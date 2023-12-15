document.addEventListener('DOMContentLoaded', function() {
    // Get all the toggle links
    var toggleLinks = document.querySelectorAll('.toggle-link');

    // Add click event listener to each toggle link
    toggleLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the target section ID from the data-target attribute
            var targetId = link.getAttribute('data-target');
            var targetSection = document.getElementById(targetId + '-content');

            // Toggle the display property of the target section
            if (targetSection.style.display === 'none' || targetSection.style.display === '') {
                targetSection.style.display = 'block';
            } else {
                targetSection.style.display = 'none';
            }
        });
    });
});
