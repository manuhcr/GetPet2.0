import animais from './animais.js';

const container = document.getElementById("adocao-container");
const inputFiltro = document.getElementById("filtro-adocao");
const selectFiltro = document.getElementById("filtro-tipo");

let tipoSelecionado = "todos"; // O valor inicial é "todos"

function renderAnimais(lista) {
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p style='text-align: center;'>Nenhum animal encontrado.</p>";
    return;
  }

  lista.forEach(animal => {
    const card = document.createElement("div");
    card.className = "adocao-card";

    card.innerHTML = `
      <img src="${animal.imagem}" class="adocao-image">
      <div class="adocao-info">
        <h2>${animal.nome}</h2>
        <p>${animal.descricao}</p>
        <button onclick="dispararConfetes()" class="adocao-button">Adotar</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Aplica os filtros
function aplicarFiltros() {
  const termo = inputFiltro.value.toLowerCase();

  const filtrados = animais.filter(animal => {
    const nomeMatch = animal.nome.toLowerCase().includes(termo);
    const tipoMatch = tipoSelecionado === "todos" || animal.animal === tipoSelecionado;

    return nomeMatch && tipoMatch;
  });

  renderAnimais(filtrados);
}

inputFiltro.addEventListener("input", aplicarFiltros);

// Evento para alterar o filtro de tipo com o select
selectFiltro.addEventListener("change", () => {
  tipoSelecionado = selectFiltro.value; // Pega o valor do select

  aplicarFiltros();
});

renderAnimais(animais);
