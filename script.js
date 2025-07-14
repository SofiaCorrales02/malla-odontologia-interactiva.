document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function actualizarEstadoRamos() {
    const completados = Array.from(document.querySelectorAll(".ramo.completado"))
      .map(r => r.textContent.trim());

    ramos.forEach(ramo => {
      const requisitos = ramo.dataset.prerrequisitos.split(",").map(r => r.trim()).filter(Boolean);
      const todosCumplidos = requisitos.every(req => completados.includes(req));

      if (requisitos.length === 0 || todosCumplidos) {
        ramo.classList.remove("bloqueado");
      } else {
        ramo.classList.add("bloqueado");
      }
    });
  }

  ramos.forEach(ramo => {
    const requisitos = ramo.dataset.prerrequisitos.split(",").map(r => r.trim()).filter(Boolean);
    if (requisitos.length > 0) {
      ramo.classList.add("bloqueado");
    }

    ramo.addEventListener("click", () => {
      if (!ramo.classList.contains("bloqueado")) {
        ramo.classList.toggle("completado");
        actualizarEstadoRamos();
      }
    });
  });

  document.getElementById("reiniciar").addEventListener("click", () => {
    ramos.forEach(ramo => {
      ramo.classList.remove("completado", "bloqueado");
    });
    actualizarEstadoRamos();
  });

  actualizarEstadoRamos();
});
