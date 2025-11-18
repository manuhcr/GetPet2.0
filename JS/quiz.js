const raças = {
  "Boa Constritora": 0,
  "Píton bola": 0,
  "Coelho branco": 0,
  "Coelho cinza": 0,
  "Coelho misturado": 0,
  "Porquinho-da-índia": 0,
  "Calopsita": 0,
  "Papagaio": 0,
  "Rolinha": 0,
  "Dálmata": 0,
  "Bulldog": 0,
  "Pitbull": 0,
  "Caramelo": 0,
  "São Bernardo": 0,
  "Pincher": 0,
  "Pug": 0,
  "Gato laranja": 0,
  "Gato frajola": 0,
  "Gato branco": 0,
  "Gato siamês": 0
};

const imagens = {
  "Boa Constritora": "./Img/CobraMarrom.png",
  "Píton bola": "./Img/CobraBranca.png",
  "Coelho branco": "./Img/coelhoBranco.png",
  "Coelho cinza": "./Img/coelhoCinza.png",
  "Coelho misturado": "./Img/coelhoMesclado.png",
  "Porquinho-da-índia": "./Img/hamster.png",
  "Calopsita": "./Img/calopsita.png",
  "Papagaio": "./Img/Papagaio.png",
  "Rolinha": "./Img/rolinhaPassaro.png",
  "Dálmata": "./Img/dalmata.png",
  "Bulldog": "./Img/bulldog.png",
  "Pitbull": "./Img/pitbull.png",
  "Caramelo": "./Img/caramelo.png",
  "São Bernardo": "./Img/saoBernardo.png",
  "Pincher": "./Img/pincher.png",
  "Pug": "./Img/pug.png",
  "Gato laranja": "./Img/gatoLaranja.png",
  "Gato frajola": "./Img/Frajola.png",
  "Gato branco": "./Img/gatoBranco.png",
  "Gato siamês": "./Img/gatoSiames.png"
};

const descrições = {
  "Boa Constritora": "Uma cobra grande, ideal para quem tem espaço e curiosidade por animais exóticos.",
  "Píton bola": "Uma cobra de médio porte, tranquila, ótima para iniciantes em répteis.",
  "Coelho branco": "Afetuoso, silencioso e ótimo para crianças.",
  "Coelho cinza": "Mais ativo e brincalhão, gosta de interação.",
  "Coelho misturado": "Equilibrado, bom para quem tem espaço médio.",
  "Porquinho-da-índia": "Animal pequeno, silencioso e de fácil manutenção.",
  "Calopsita": "Ave alegre e sociável, gosta de interagir.",
  "Papagaio": "Muito inteligente, brincalhão e vocal.",
  "Rolinha": "Ave tranquila, ótima para ambientes silenciosos.",
  "Dálmata": "Ativo, precisa de espaço e brincadeiras.",
  "Bulldog": "Tranquilo, afetuoso e ótimo para ambientes médios.",
  "Pitbull": "Forte e protetor, ideal para quem tem tempo e energia.",
  "Caramelo": "O clássico vira-lata amigo de todos, adaptável.",
  "São Bernardo": "Grande, carinhoso e precisa de espaço.",
  "Pincher": "Pequeno, valente e cheio de energia.",
  "Pug": "Ideal para apartamentos e crianças, calmo e adorável.",
  "Gato laranja": "Brincalhão e curioso.",
  "Gato frajola": "Equilibrado, afetuoso e independente.",
  "Gato branco": "Tranquilo e observador.",
  "Gato siamês": "Muito carinhoso e apegado ao tutor."
};

const perguntas = [
  {
    texto: "Qual o tamanho do espaço disponível?",
    opcoes: [
      { texto: "Pequeno (ex: apartamento pequeno)", pontos: ["Pincher", "Pug", "Coelho branco", "Porquinho-da-índia", "Calopsita", "Gato branco", "Gato siamês", "Píton bola"] },
      { texto: "Médio (ex: apartamento com varanda ou casa pequena)", pontos: ["Bulldog", "Gato frajola", "Gato laranja", "Papagaio", "Coelho misturado", "Píton bola", "Caramelo"] },
      { texto: "Grande (quintal ou sítio)", pontos: ["São Bernardo", "Pitbull", "Dálmata", "Boa Constritora", "Papagaio", "Rolinha", "Gato laranja", "Caramelo"] }
    ]
  },
  {
    texto: "Quanto tempo você tem para dedicar diariamente ao animal?",
    opcoes: [
      { texto: "Muito tempo", pontos: ["Pitbull", "Caramelo", "Papagaio", "Dálmata", "Gato laranja", "Coelho cinza"] },
      { texto: "Algum tempo", pontos: ["Bulldog", "Pug", "Gato siamês", "Calopsita", "Coelho branco", "Pincher"] },
      { texto: "Pouco tempo", pontos: ["Porquinho-da-índia", "Boa Constritora", "Píton bola", "Rolinha", "Gato branco"] }
    ]
  },
  {
    texto: "Você tem alergia a pelos ou penas?",
    opcoes: [
      { texto: "Sim", pontos: ["Boa Constritora", "Píton bola", "Porquinho-da-índia"] },
      { texto: "Não", pontos: ["Pug", "Pincher", "Gato siamês", "Caramelo", "Papagaio", "Coelho branco", "Gato laranja"] }
    ]
  },
  {
    texto: "Você busca um animal que seja:",
    opcoes: [
      { texto: "Carinhoso e próximo", pontos: ["Pug", "Caramelo", "Papagaio", "Gato siamês", "Coelho branco"] },
      { texto: "Independente", pontos: ["Gato branco", "Boa Constritora", "Píton bola", "Rolinha"] },
      { texto: "Exótico e silencioso", pontos: ["Boa Constritora", "Píton bola", "Porquinho-da-índia", "Calopsita"] },
      { texto: "Alegre e brincalhão", pontos: ["Pitbull", "Dálmata", "Pincher", "Gato laranja"] }
    ]
  },
  {
    texto: "Você convive com crianças ou idosos?",
    opcoes: [
      { texto: "Sim", pontos: ["Pug", "Caramelo", "Gato branco", "Coelho branco", "Calopsita"] },
      { texto: "Não", pontos: ["Pitbull", "Boa Constritora", "Papagaio", "Píton bola"] }
    ]
  }
];

let indicePergunta = 0;
let respostas = new Array(perguntas.length).fill(null); // Armazena respostas
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const headerEl = document.getElementById("quiz-header");
const imgEl = document.getElementById("animal-img");
const textEl = document.getElementById("result-text");
const progressEl = document.getElementById("progress-container"); // NOVO: Referência ao container das bolinhas
// let opcaoSelecionada = null; // Removido, pois a resposta é processada imediatamente

function resetarPontos() {
  Object.keys(raças).forEach(r => raças[r] = 0);
}

// NOVO: Função para avançar o quiz e calcular os pontos
function avancarQuiz(respostaSelecionada) {
  respostas[indicePergunta] = respostaSelecionada;

  // Calcula os pontos
  resetarPontos();
  respostas.forEach((resposta, i) => {
    if (resposta !== null) {
      // Garante que a estrutura existe antes de tentar acessar
      if (perguntas[i] && perguntas[i].opcoes[resposta]) {
        perguntas[i].opcoes[resposta].pontos.forEach(r => raças[r]++);
      }
    }
  });

  indicePergunta++;
  if (indicePergunta < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

// NOVO: Função para criar e atualizar as bolinhas de progresso
function atualizarBolinhas() {
  // Usa o container de progresso fora do quiz
  const dotsContainer = progressEl;

  // Limpa o conteúdo anterior
  dotsContainer.innerHTML = '';

  // Se o quiz estiver no resultado, não mostra as bolinhas
  if (quizEl.style.display === "none") {
    return;
  }

  // Cria o div real que vai aplicar os estilos flex
  const dotsWrapper = document.createElement("div");
  dotsWrapper.className = "progress-dots";


  // Cria as bolinhas
  for (let i = 0; i < perguntas.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";

    if (i < indicePergunta) {
      dot.classList.add("completed");
    } else if (i === indicePergunta) {
      dot.classList.add("active");
    }

    // Funcionalidade de "voltar" ao clicar
    if (i < indicePergunta) {
      dot.style.cursor = "pointer";
      dot.onclick = () => {
        indicePergunta = i;
        mostrarPergunta();
      };
    }

    dotsWrapper.appendChild(dot);
  }

  dotsContainer.appendChild(dotsWrapper);
}

function mostrarPergunta() {
  const atual = perguntas[indicePergunta];

  // Tenta encontrar o container de bolinhas existente
  const existingDots = quizEl.querySelector(".progress-dots");
  quizEl.innerHTML = ''; // Limpa tudo

  // Adiciona o título da pergunta (Pergunta 1, 2, etc.)
  const tituloPergunta = document.createElement("p");
  tituloPergunta.innerHTML = `Pergunta ${indicePergunta + 1}  de 5`; // Adiciona número da pergunta
  quizEl.appendChild(tituloPergunta);

  // Adiciona o texto da pergunta
  const textoPergunta = document.createElement("p");
  textoPergunta.textContent = atual.texto;
  quizEl.appendChild(textoPergunta);

  // Container para opções
  const opcoesContainer = document.createElement("div");
  opcoesContainer.className = "opcoes-container";

  // Adiciona opções
  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");

    btn.textContent = opcao.texto;
    // Se esta resposta já foi selecionada, marca como 'selected'
    if (respostas[indicePergunta] === index) {
      btn.classList.add("selected");
    }

    // Lógica de AVANÇO: Ao clicar, marca a opção e avança
    btn.onclick = () => {
      // Marca a opção visualmente (remove de outros)
      opcoesContainer.querySelectorAll("button").forEach(b => b.className = "");
      btn.classList.add("selected");

      // Avança o quiz com a resposta
      setTimeout(() => {
        avancarQuiz(index);
      }, 400); // Pequeno delay para a transição visual
    };
    opcoesContainer.appendChild(btn);
  });

  quizEl.appendChild(opcoesContainer);

  // Adiciona e atualiza as bolinhas (sem botões de navegação)
  atualizarBolinhas();
}


import dispararConfetes from "./confete.js"

function mostrarResultado() {
 dispararConfetes();
  progressEl.style.display = "none";
  quizEl.style.display = "none";
  resultEl.style.display = "block"; // Mudado para 'block' para o layout do resultado

  // Limpa conteúdo anterior
  resultEl.innerHTML = '';

  headerEl.style.display = "none";

  // Calcula o vencedor
  const vencedor = Object.entries(raças).sort((a, b) => b[1] - a[1])[0][0];

  // Cria container para imagem + texto lado a lado
  const resultadoTopo = document.createElement("div");
  resultadoTopo.classList.add("resultAnimal")
  // O estilo 'result' deve ser flex, se não o resultadoTopo precisa ter o estilo do resultado.
  Object.assign(resultadoTopo.style, {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap", // Garante que quebre em telas pequenas
  });


  // Cria e adiciona imagem
  const img = document.createElement("img");
  img.id = "animal-img";
  img.src = imagens[vencedor];
  img.alt = "Animal recomendado";
  Object.assign(img.style, {
    maxWidth: "200px",
    height: "auto",
    borderRadius: "20px", // Mantém o estilo do seu CSS original
    flexShrink: 0,
  });
  resultadoTopo.appendChild(img);

  // Cria e adiciona texto
  const textDiv = document.createElement("div");
  textDiv.id = "result-text";
  
  let animaisCartigoFeminino =  ['Boa Constritora' , 'Píton bola' , 'Calopsita' , 'Rolinha'];
  let artigo = "";

  if (animaisCartigoFeminino.includes(vencedor)){
    artigo = " uma "
  } else {
    artigo = " um "
  }

  textDiv.innerHTML = `<h2>De acordo com o nosso quiz,você deveria ter ${artigo} ${vencedor}</h2><p>${descrições[vencedor]}</p>`; // Adicionando título ao resultado
  resultadoTopo.appendChild(textDiv);

  // Adiciona o container topo ao resultEl
  resultEl.appendChild(resultadoTopo);
  
  // Cria container para botões (ficará abaixo do resultadoTopo)
  const btnContainer = document.createElement("div");
  btnContainer.className = "result-btn-container";
  Object.assign(btnContainer.style, {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap"
  });


  // Botão Refazer
  const btnRefazer = document.createElement("button");
  btnRefazer.textContent = "Refazer o Quiz";
  btnRefazer.className = "result-btn";
  btnRefazer.onclick = () => {
    indicePergunta = 0;
    respostas = new Array(perguntas.length).fill(null);
    resetarPontos();
    quizEl.style.display = "block";
    resultEl.style.display = "none";
    mostrarPergunta();
  };
  btnContainer.appendChild(btnRefazer);

  // Botão Voltar para Home
  const btnHome = document.createElement("button");
  btnHome.textContent = "Voltar para a Home";
  btnHome.className = "result-btn";
  btnHome.onclick = () => {
    window.location.href = "index.html";
  };
  btnContainer.appendChild(btnHome);

  // Adiciona container de botões abaixo do resultado topo
  resultEl.appendChild(btnContainer);

}

mostrarPergunta();

