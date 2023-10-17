document.getElementById('darkModeToggle').addEventListener('click', function() {
  var body = document.body;

  // Si el cuerpo tiene la clase "dark-mode", la removemos. Si no la tiene, la añadimos.
  if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      this.innerHTML = 'Modo Oscuro';  // Cambiar el texto del botón
  } else {
      body.classList.add('dark-mode');
      this.innerHTML = 'Modo Claro';  // Cambiar el texto del botón
  }
});