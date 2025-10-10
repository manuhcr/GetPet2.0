const pataDireita = document.getElementById('patasDireita'); // pode ser bottom right
const pataEsquerda = document.getElementById('patasEsquerda'); // bottom left

// Carrega animações
const animDireita = lottie.loadAnimation({
  container: pataDireita,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'JS/JSON/patinhas.json'
});

const animEsquerda = lottie.loadAnimation({
  container: pataEsquerda,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'JS/JSON/patinhas.json'
});

function direitaParaEsquerda() {
  // direita inicia embaixo
  pataDireita.style.opacity = 0.8;
  pataDireita.style.transform = "rotate(-45deg) translateY(0)";
  animDireita.goToAndPlay(0, true);

  // sobe a direita
  setTimeout(() => {
    pataDireita.style.transform = "rotate(-45deg) translateY(-15px)";
  }, 500);

  // esquerda aparece depois
  setTimeout(() => {
    // esconde a direita e reseta posição
    pataDireita.style.opacity = 0;
    pataDireita.style.transform = "rotate(-45deg) translateY(0)";

    // mostra esquerda
    pataEsquerda.style.opacity = 0.8;
    pataEsquerda.style.transform = "rotate(45deg) translateY(0)";
    animEsquerda.goToAndPlay(0, true);

    // sobe a esquerda
    setTimeout(() => {
      pataEsquerda.style.transform = "rotate(45deg) translateY(-15px)";
    }, 500);

    // esconde a esquerda depois
    setTimeout(() => {
      pataEsquerda.style.opacity = 0;
      pataEsquerda.style.transform = "rotate(45deg) translateY(0)";
    }, 2000);

  }, 2000);

  // volta pro outro ciclo após 5s
  setTimeout(esquerdaParaDireita, 5000);
}

function esquerdaParaDireita() {
  // esquerda inicia embaixo
  pataEsquerda.style.opacity = 0.8;
  pataEsquerda.style.transform = "rotate(45deg) translateY(0)";
  animEsquerda.goToAndPlay(0, true);

  // sobe a esquerda
  setTimeout(() => {
    pataEsquerda.style.transform = "rotate(45deg) translateY(-15px)";
  }, 500);

  // direita aparece depois
  setTimeout(() => {
    // esconde a esquerda e reseta
    pataEsquerda.style.opacity = 0;
    pataEsquerda.style.transform = "rotate(45deg) translateY(0)";

    // mostra direita
    pataDireita.style.opacity = 0.8;
    pataDireita.style.transform = "rotate(-45deg) translateY(0)";
    animDireita.goToAndPlay(0, true);

    // sobe a direita
    setTimeout(() => {
      pataDireita.style.transform = "rotate(-45deg) translateY(-15px)";
    }, 500);

    // esconde a direita depois
    setTimeout(() => {
      pataDireita.style.opacity = 0;
      pataDireita.style.transform = "rotate(-45deg) translateY(0)";
    }, 2000);

  }, 2000);

  // volta pro outro ciclo
  setTimeout(direitaParaEsquerda, 5000);
}
