document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      const requisitos = ramo.dataset.prerrequisitos.split(",").map(r => r.trim()).filter(Boolean);
      const completados = Array.from(document.querySelectorAll(".ramo.completado")).map(r => r.textContent);

      const todosCumplidos = requisitos.every(req => completados.includes(req));

      if (requisitos.length === 0 || todosCumplidos) {
        ramo.classList.toggle("completado");
        ramo.classList.remove("bloqueado");
      } else {
        alert("Faltan prerrequisitos: " + requisitos.join(", "));
        ramo.classList.add("bloqueado");
      }
// Lógica del botón de reinicio
document.getElementById("reiniciar").addEventListener("click", () => {
  document.querySelectorAll(".ramo").forEach(ramo => {
    ramo.classList.remove("completado", "bloqueado");
  });
});
