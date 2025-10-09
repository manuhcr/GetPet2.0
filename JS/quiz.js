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
const imgEl = document.getElementById("animal-img");
const textEl = document.getElementById("result-text");
let opcaoSelecionada = null; // Armazena a opção selecionada na pergunta atual

function resetarPontos() {
  Object.keys(raças).forEach(r => raças[r] = 0);
}

function mostrarPergunta() {
  const atual = perguntas[indicePergunta];
  quizEl.innerHTML = `<p>${atual.texto}</p>`;
  
  // Container para opções
  const opcoesContainer = document.createElement("div");
  opcoesContainer.className = "opcoes-container";
  
  // Adiciona opções
  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcao.texto;
    btn.className = respostas[indicePergunta] === index ? "selected" : "";
    btn.onclick = () => {
      opcaoSelecionada = index;
      // Remove a classe 'selected' de outros botões
      opcoesContainer.querySelectorAll("button").forEach(b => b.className = "");
      btn.className = "selected";
      atualizarBotoesNavegacao();
    };
    opcoesContainer.appendChild(btn);
  });
  quizEl.appendChild(opcoesContainer);
  
  // Container para botões de navegação
  const navContainer = document.createElement("div");
  navContainer.className = "nav-container";
  
  // Botão Voltar
  const btnVoltar = document.createElement("button");
  btnVoltar.textContent = "Voltar";
  btnVoltar.className = "nav-btn";
  btnVoltar.disabled = indicePergunta === 0;
  btnVoltar.onclick = () => {
    if (indicePergunta > 0) {
      // Salva a resposta atual, se houver
      if (opcaoSelecionada !== null) {
        respostas[indicePergunta] = opcaoSelecionada;
      }
      indicePergunta--;
      opcaoSelecionada = respostas[indicePergunta];
      mostrarPergunta();
    }
  };
  navContainer.appendChild(btnVoltar);
  
  // Botão Próxima
  const btnProxima = document.createElement("button");
  btnProxima.textContent = indicePergunta === perguntas.length - 1 ? "Finalizar" : "Próxima";
  btnProxima.className = "nav-btn";
  btnProxima.disabled = opcaoSelecionada === null && respostas[indicePergunta] === null;
  btnProxima.onclick = () => {
    if (opcaoSelecionada !== null) {
      respostas[indicePergunta] = opcaoSelecionada;
      // Aplica pontos da resposta atual
      resetarPontos();
      respostas.forEach((resposta, i) => {
        if (resposta !== null) {
          perguntas[i].opcoes[resposta].pontos.forEach(r => raças[r]++);
        }
      });
      indicePergunta++;
      if (indicePergunta < perguntas.length) {
        opcaoSelecionada = respostas[indicePergunta];
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    }
  };
  navContainer.appendChild(btnProxima);
  
  quizEl.appendChild(navContainer);
}

function atualizarBotoesNavegacao() {
  const btnProxima = quizEl.querySelector(".nav-btn:last-child");
  btnProxima.disabled = opcaoSelecionada === null && respostas[indicePergunta] === null;
}

function mostrarResultado() {
  quizEl.style.display = "none";
  resultEl.style.display = "flex";

  // Ajusta display para block para evitar layout em linha
resultEl.style.display = "block";

// Limpa conteúdo anterior
resultEl.innerHTML = '';

const vencedor = Object.entries(raças).sort((a, b) => b[1] - a[1])[0][0];

// Cria container para imagem + texto lado a lado
const resultadoTopo = document.createElement("div");
resultadoTopo.style.display = "flex";
resultadoTopo.style.alignItems = "center";
resultadoTopo.style.gap = "20px";  // Espaço entre imagem e texto

// Cria e adiciona imagem
const img = document.createElement("img");
img.id = "animal-img";
img.src = imagens[vencedor];
img.alt = "Animal recomendado";
img.style.maxWidth = "200px";  // Ajuste se quiser limitar tamanho
img.style.height = "auto";
resultadoTopo.appendChild(img);

// Cria e adiciona texto
const textDiv = document.createElement("div");
textDiv.id = "result-text";
textDiv.innerHTML = `<h2>${vencedor}</h2><p>${descrições[vencedor]}</p>`;
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
  opcaoSelecionada = null;
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