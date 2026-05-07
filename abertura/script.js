
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const mensagemEl = document.getElementById("mensagem");

const dataAlvo = new Date("2026-06-11T00:00:00");

function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataAlvo - agora;

  if (diferenca <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    mensagemEl.textContent = "A Copa do Mundo 2026 começou!";
    return;
  }

  const totalSegundos = Math.floor(diferenca / 1000);

  const dias = Math.floor(totalSegundos / 86400);
  const horas = Math.floor((totalSegundos % 86400) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = Math.floor(totalSegundos % 60);

  diasEl.textContent = formatarNumero(dias);
  horasEl.textContent = formatarNumero(horas);
  minutosEl.textContent = formatarNumero(minutos);
  segundosEl.textContent = formatarNumero(segundos);
}

atualizarContador();
setInterval(atualizarContador, 1000);

// ELEMENTOS DO HTML
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const mensagemEl = document.getElementById("mensagem");

// DATA DE INÍCIO DA COPA DO MUNDO 2026
// Abertura: 11 de junho de 2026
const dataCopa = new Date("2026-06-11T00:00:00");

// FUNÇÃO PARA DEIXAR SEMPRE COM 2 DÍGITOS
function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

// FUNÇÃO QUE ATUALIZA O CONTADOR
function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCopa - agora;

  // SE A DATA JÁ CHEGOU
  if (diferenca <= 0) {
    diasEl.textContent = "00";
    horasEl.textContent = "00";
    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    mensagemEl.textContent = "A Copa do Mundo 2026 começou!";
    return;
  }

  // CONVERSÃO DA DIFERENÇA
  const totalSegundos = Math.floor(diferenca / 1000);

  const dias = Math.floor(totalSegundos / (60 * 60 * 24));
  const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
  const segundos = Math.floor(totalSegundos % 60);

  // ATUALIZA O HTML
  diasEl.textContent = formatarNumero(dias);
  horasEl.textContent = formatarNumero(horas);
  minutosEl.textContent = formatarNumero(minutos);
  segundosEl.textContent = formatarNumero(segundos);
}
