const patasCimaDir = document.getElementById('pata1');  // top right
const patasBaixoDir = document.getElementById('pata2'); // bottom right
const patasCimaEsq = document.getElementById('pata3');  // top left
const patasBaixoEsq = document.getElementById('pata4'); // bottom left

// Carrega as animações Lottie
const animCimaDir = lottie.loadAnimation({
  container: patasCimaDir,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'JS/JSON/patinhas.json'
});

const animBaixoDir = lottie.loadAnimation({
  container: patasBaixoDir,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'JS/JSON/patinhas.json'
});

const animCimaEsq = lottie.loadAnimation({
  container: patasCimaEsq,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'JS/JSON/patinhas.json'
});

const animBaixoEsq = lottie.loadAnimation({
  container: patasBaixoEsq,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'JS/JSON/patinhas.json'
});
function animPatasDir() {
  // 🐾 começa na direita inferior
  patasBaixoDir.style.opacity = 0.5;
  animBaixoDir.goToAndPlay(0, true);

  // depois de 2s, aparece a de cima esquerda
  setTimeout(() => {
    patasBaixoDir.style.opacity = 0;
    patasCimaEsq.style.opacity = 0.5;
    animCimaEsq.goToAndPlay(0, true);
  }, 2000);

  // depois de +2s, some a de cima esquerda
  setTimeout(() => {
    patasCimaEsq.style.opacity = 0;
  }, 4000);

  // após 8s, inicia a sequência contrária
  setTimeout(() => {
    animPatasEsq();
  }, 8000);
}

function animPatasEsq() {
  // 🐾 começa na esquerda inferior
  patasBaixoEsq.style.opacity = 0.5;
  animBaixoEsq.goToAndPlay(0, true);

  // depois de 2s, aparece a de cima direita
  setTimeout(() => {
    patasBaixoEsq.style.opacity = 0;
    patasCimaDir.style.opacity = 0.5;
    animCimaDir.goToAndPlay(0, true);
  }, 2000);

  // depois de +4s, some a de cima direita
  setTimeout(() => {
    patasCimaDir.style.opacity = 0;
  }, 4000);

  // após 10s, volta pro ciclo da direita
  setTimeout(() => {
    animPatasDir();
  }, 10000);
}

// inicia o ciclo apenas uma vez
animPatasDir();

const card = document.querySelector('.card');
const checkbox = document.querySelector('#button-3 .checkbox');

// quando clicar no botão switch:
checkbox.addEventListener('change', () => {
  card.classList.toggle('rotated');

  // muda cor das patinhas ao alternar
  document.querySelectorAll('.patas svg path').forEach(path => {
    path.style.fill = checkbox.checked ? '#c57f51ff' : '#005a539a'; //if/else do botão checkbox 
  });
});

const modal = document.getElementById("modal-senha");
const btn = document.getElementById("esqueceu-senha-btn");
const span = document.querySelector(".modal .close");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // evita que o link role a página
  modal.style.display = "flex";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

