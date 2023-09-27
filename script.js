const modoOscuroBtn = document.getElementById("modoOscuroBtn");

modoOscuroBtn.addEventListener("click", () => {
  // Verificar el estado actual del modo
  const modoOscuroHabilitado = document.body.classList.contains("modo-oscuro");

  // Cambiar el modo
  if (modoOscuroHabilitado) {
    document.body.classList.remove("modo-oscuro");
  } else {
    document.body.classList.add("modo-oscuro");
  }
});