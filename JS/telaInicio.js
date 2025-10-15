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

// Seleciona o modal inteiro
const modal = document.getElementById("modal-senha");

// Seleciona o link dentro do login
const btn = document.getElementById("esqueceu-senha-btn");

// Seleciona o botão de fechar dentro do modal
const span = document.querySelector(".modal .close");

// Quando o usuário clica no link "Esqueceu a senha?"
btn.addEventListener("click", (e) => {
  // e (event) é a propriedade que se refere ao elemento DOM que disparou um evento
  e.preventDefault(); //é um método JavaScript que impede o comportamento padrão de um evento no navegador, ou seja , nesse caso, previne que o link role a página
  modal.style.display = "flex"; // mostra o modal (display:flex)
});

// Quando o usuário clica no "×"
span.addEventListener("click", () => {
  modal.style.display = "none"; // esconde o modal
});

// Quando o usuário clica fora do conteúdo do modal
window.addEventListener("click", (e) => {
  if (e.target === modal) { // se clicou no fundo escuro
    modal.style.display = "none"; // fecha o modal
  }
});

const btnHome = document.getElementById('btn-home');
btnHome.addEventListener("click", function (event) {
  event.preventDefault(); // impede reload

  // chama verificar e só continua se estiver tudo certo
  if (verificar()) {
    renderizar();
  }
});

function verificar() {
  const usuário = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuário === "" || senha === "") {
    alert("Preencha todos os campos obrigatórios!");
    return false; // falhou
  }

  return true; // passou
}

function renderizar() {
  const urlHome = "./index.html";
  window.location.href = urlHome;
}