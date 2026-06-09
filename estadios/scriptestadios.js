const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const mensagemEl = document.getElementById("mensagem");

const dataCopa = new Date("2026-06-11T16:00:00-03:00");

function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

function contadorDisponivel() {
  return diasEl && horasEl && minutosEl && segundosEl;
}

function atualizarContador() {
  if (!contadorDisponivel()) {
    return;
  }

  const agora = new Date();
  const diferenca = dataCopa - agora;

  if (diferenca <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";

    if (mensagemEl) {
      mensagemEl.textContent = "A Copa do Mundo 2026 começou!";
    }

    return;
  }

  const totalSegundos = Math.floor(diferenca / 1000);
  const dias = Math.floor(totalSegundos / 86400);
  const horas = Math.floor((totalSegundos % 86400) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  diasEl.textContent = formatarNumero(dias);
  horasEl.textContent = formatarNumero(horas);
  minutosEl.textContent = formatarNumero(minutos);
  segundosEl.textContent = formatarNumero(segundos);
}

atualizarContador();
setInterval(atualizarContador, 1000);

const elementosRevelar = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("ativo");
        observador.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.16
  });

  elementosRevelar.forEach((elemento) => observador.observe(elemento));
} else {
  elementosRevelar.forEach((elemento) => elemento.classList.add("ativo"));
}
