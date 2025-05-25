// script.js

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent default anchor click behavior
    e.preventDefault();

    // Get the target section's ID
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the section smoothly
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
