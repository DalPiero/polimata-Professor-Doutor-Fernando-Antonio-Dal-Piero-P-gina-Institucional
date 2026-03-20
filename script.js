document.addEventListener("DOMContentLoaded", () => {
  const alerta = document.getElementById("alerta-gpt");
  const btnReexibir = document.getElementById("botao-reexibir-alerta");
  const btnFechar = document.getElementById("fechar-alerta");

  function esconder() {
    alerta.style.opacity = "0";
    setTimeout(() => {
      alerta.style.display = "none";
    }, 500);
  }

  function mostrar() {
    alerta.style.display = "block";
    setTimeout(() => {
      alerta.style.opacity = "1";
    }, 80);

    clearTimeout(alerta._timer);
    alerta._timer = setTimeout(() => {
      esconder();
    }, 20000);
  }

  if (btnReexibir) {
    btnReexibir.addEventListener("click", mostrar);
  }

  if (btnFechar) {
    btnFechar.addEventListener("click", esconder);
  }

  setTimeout(mostrar, 1000);
});
