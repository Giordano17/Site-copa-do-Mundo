// ELEMENTOS DO HTML
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const mensagemEl = document.getElementById("mensagem");

// DATA DE INICIO DA COPA DO MUNDO 2026
const dataCopa = new Date("2026-06-11T16:00:00-03:00");

// FUNCAO PARA DEIXAR O NUMERO COM 2 DIGITOS
function formatarNumero(numero) {
  return String(numero).padStart(2, "0");
}

// FUNCAO QUE ATUALIZA A CONTAGEM REGRESSIVA
function atualizarContador() {
  const agora = new Date();
  const diferenca = dataCopa - agora;

  // SE A COPA JA TIVER COMECADO
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

  // TRANSFORMA MILISSEGUNDOS EM SEGUNDOS
  const totalSegundos = Math.floor(diferenca / 1000);

  // CALCULA DIAS, HORAS, MINUTOS E SEGUNDOS
  const dias = Math.floor(totalSegundos / 86400);
  const horas = Math.floor((totalSegundos % 86400) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  // COLOCA OS VALORES NA TELA
  diasEl.textContent = formatarNumero(dias);
  horasEl.textContent = formatarNumero(horas);
  minutosEl.textContent = formatarNumero(minutos);
  segundosEl.textContent = formatarNumero(segundos);
}

// ATUALIZA ASSIM QUE A PAGINA CARREGA
atualizarContador();

// ATUALIZA A CADA 1 SEGUNDO
setInterval(atualizarContador, 1000);
