// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks for contacting me! I'll get back soon.");
  form.reset();
});
