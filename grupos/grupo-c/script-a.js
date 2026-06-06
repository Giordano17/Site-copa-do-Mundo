const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const dataCopa = new Date("2026-06-11T21:00:00-03:00");

function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCopa - agora;

  if (diferenca <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
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

function revelarElementos() {
  const elementos = document.querySelectorAll(".revelar");
  const alturaTela = window.innerHeight;

  elementos.forEach((elemento) => {
    const topo = elemento.getBoundingClientRect().top;

    if (topo < alturaTela - 80) {
      elemento.classList.add("ativo");
    }
  });
}

atualizarContador();
setInterval(atualizarContador, 1000);

revelarElementos();
window.addEventListener("scroll", revelarElementos);

