const nav = document.getElementById('mobile-menu');

// Para Abrir:
nav.classList.remove('-translate-y-full');
nav.classList.add('translate-y-0');

// Para Fechar:
nav.classList.add('-translate-y-full');
nav.classList.remove('translate-y-0');