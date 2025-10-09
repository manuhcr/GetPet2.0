const patasCimaDir = document.getElementById('patas1');
const patasBaixoDir = document.getElementById('patas2');
const patasCimaEsq = document.getElementById('patas3');
const patasBaixoEsq = document.getElementById('patas4');


  // carrega as animações
  const animCimaDir = lottie.loadAnimation({
    container: patasCimaDir,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path:'JS/JSON/patinhas.json'
  });

  const animBaixoDir = lottie.loadAnimation({
    container: patasBaixoDir,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'JS/JSON/patinhas.json'
  });

   // carrega as animações
  const animCimaEsq = lottie.loadAnimation({
    container: patasCimaEsq,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path:'JS/JSON/patinhas.json'
  });

  const animBaixoEsq = lottie.loadAnimation({
    container: patasBaixoEsq,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'JS/JSON/patinhas.json'
  });

  function aparecerAlternado() {
    // mostra em cima na direita
    patasCimaDir.style.opacity = 0.4;
    animCimaDir.goToAndPlay(0, true);

    // depois de 3s, some e mostra embaixo
    setTimeout(() => {
      patasCimaDir.style.opacity = 0;
      patasBaixoDir.style.opacity = 0.4;
      animBaixoDir.goToAndPlay(0, true);
    }, 3000);

    // depois de mais 3s, some embaixo e reinicia ciclo
    setTimeout(() => {
      patasBaixoDir.style.opacity = 0;
      aparecerAlternado();
    }, 6000);
//mostra em cima na esquerda
   patasCimaEsq.style.opacity = 0.4;
    animCimaEsq.goToAndPlay(0, true);

    // depois de 3s, some e mostra embaixo
    setTimeout(() => {
      patasCimaEsq.style.opacity = 0;
      patasBaixoEsq.style.opacity = 0.4;
      animBaixoDir.goToAndPlay(0, true);
    }, 3000);

    // depois de mais 3s, some embaixo e reinicia ciclo
    setTimeout(() => {
      patasBaixoEsq.style.opacity = 0;
      aparecerAlternado();
    }, 6000);
  }

  // inicia
  aparecerAlternado();