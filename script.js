document.addEventListener('DOMContentLoaded', () => {
  // Manejar el envío del formulario de contacto
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      alert(`Gracias, ${name}! Tu mensaje ha sido enviado.`);
      contactForm.reset();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });

  // Agregar interactividad a la navegación
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});

