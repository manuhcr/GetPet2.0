const container = document.getElementById("adestramento-container");

function renderServicos(servicos) {
  container.innerHTML = "";

  if (servicos.length === 0) {
    container.innerHTML = "<p style='text-align: center;'>Nenhum serviço de adestramento encontrado.</p>";
    return;
  }

  servicos.forEach(servico => {
    const card = document.createElement("div");
    card.className = "adestramento-card";

    // Adicionando o conteúdo do card
    card.innerHTML = `
      <img src="${servico.imagem}" class="adestramento-image">
      <div class="adestramento-info">
        <h2>${servico.nome}</h2>
        <p>${servico.descricao}</p>
        <button class="adestramento-button">Contratar</button>
      </div>
    `;

    // Adicionando o card no container
    container.appendChild(card);

    // Adicionando o evento de clique no botão "Contratar"
    const button = card.querySelector(".adestramento-button");
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Impede que o clique no botão feche a sobreposição logo após abrir

      // Se o card não tiver a sobreposição, adiciona
      if (!card.querySelector('.check-overlay')) {
        const overlay = document.createElement('div');
        overlay.classList.add('check-overlay');
        card.appendChild(overlay);
      }
    });
  });
}

// Evento de clique global para detectar clique fora dos cards
document.addEventListener('click', (event) => {
  // Verifica se o clique foi fora de um card com a sobreposição
  const checkOverlay = document.querySelector('.check-overlay');
  const cardClicked = event.target.closest('.adestramento-card');

  // Se clicou fora de um card com a sobreposição, remova a sobreposição
  if (checkOverlay && !cardClicked) {
    checkOverlay.remove();
  }
});


// Evento global para detectar clique fora dos cards
document.addEventListener('click', (event) => {
  // Verifica se o clique foi fora de um card
  const card = event.target.closest('.adestramento-card');
  const checkOverlay = document.querySelector('.check-overlay');

  // Verifica se o clique não foi dentro de um card com a sobreposição
  if (checkOverlay && !card) {
    checkOverlay.remove();
  }
});


// Evento global para detectar clique fora dos cards
document.addEventListener('click', (event) => {
  const checkOverlay = document.querySelector('.check-overlay');
  const card = event.target.closest('.adestramento-card'); // Card clicado

  // Se o clique não foi dentro de um card com a sobreposição, remova a sobreposição
  if (checkOverlay && !card) {
    checkOverlay.remove();
  }
});

// Serviços de adestramento
const servicosAdestramento = [
  {
    nome: "Adestramento Básico",
    imagem: "./Img/adestramentoBasico.jpg",
    descricao: "Ensina comandos básicos como sentar, ficar, deitar e vir quando chamado.",
  },
  {
    nome: "Adestramento Avançado",
    imagem: "./Img/adestramentoAvancado.jfif",
    descricao: "Treinamento para controle de comportamento, obediência avançada e habilidades especiais.",
  },
  {
    nome: "Adestramento de Filhotes",
    imagem: "./Img/adestramentoFilhote.avif",
    descricao: "Programa especial para filhotes, focando em socialização e hábitos saudáveis.",
  },
  {
    nome: "Adestramento de Comportamento",
    imagem: "./Img/adestramentoComportamento.jpg",
    descricao: "Foca em corrigir comportamentos indesejados como latidos excessivos e agressividade.",
  },
  {
    nome: "Adestramento Personalizado",
    imagem: "./Img/adestramentoPersonalizado.jpeg",
    descricao: "Treinamento sob medida, adaptado às necessidades do seu pet e estilo de vida.",
  }
];

renderServicos(servicosAdestramento);
