function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove 'active' class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Add 'active' class to the clicked nav link
    document.querySelector(`a[href='#${sectionId}']`).classList.add('active');
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
