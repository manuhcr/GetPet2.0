import animais from './animais.js';

const container = document.getElementById("adocao-container");
const inputFiltro = document.getElementById("filtro-adocao");
const selectFiltro = document.getElementById("filtro-tipo");

let tipoSelecionado = "todos"; // O valor inicial é "todos"

function renderAnimais(lista) {
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<div style = 'display: flex; justify-content: center; flex-direction: column;'><p style='text-align: center; color: #005A53; font-family: Rammeto One , sans-serif;'>Ops! Este animal já foi adotado ou ele está indisponível</p > <img src='./Img/caoTriste.png' style='display:block;margin:0 auto;' alt='Animal indisponível'> </div>";

    return;
  }

  lista.forEach(animal => {
    const card = document.createElement("div");
    card.className = "adocao-card";
    const btnFicha = document.createElement("button");
    btnFicha.classList.add("ficha-button");
    btnFicha.textContent = "Ficha do pet";
    btnFicha.addEventListener("click", () => abreFichaPet(animal.nome));
    card.innerHTML = `
      <img src="${animal.imagem}" class="adocao-image" alt="Foto de ${animal.nome}">
      <div class="adocao-info">
        <h2>${animal.nome}</h2>
        <p>${animal.descricao}</p>
        <div class = "botoes-info">
        <button onclick="dispararConfetes()" class="adocao-button">Adotar</button>
        
        </div>
      </div>
    `;

    container.appendChild(card);
    card.querySelector(".botoes-info").appendChild(btnFicha);
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
const fichasPets = [
  {
    nome: "Bart",
    idade: "2 anos",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["V1", "V2", "Raiva"],
    temperamento: "Brincalhão e curioso",
    historia: "Resgatado das ruas, adora brincar com caixas e perseguir luzes.",
    imagem: "./Img/gatoFrajola.png",
    especie: "Gato",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Mauro",
    idade: "3 anos",
    sexo: "Macho",
    tamanho: "Médio",
    vacinas: ["Polyomavírus", "PBFD"],
    temperamento: "Extrovertido e sociável",
    historia: "Papagaio que adora imitar sons divertidos e interagir com humanos.",
    imagem: "./Img/Papagaio.png",
    especie: "Pássaro",
    selo: "./Img/Silvestre.png"
  },
  {
    nome: "Zaya",
    idade: "1 ano",
    sexo: "Fêmea",
    tamanho: "Grande",
    vacinas: ["V8", "Raiva"],
    temperamento: "Leal e protetora",
    historia: "Pitbull muito carinhosa, ótima com crianças e outros animais.",
    imagem: "./Img/pitbull.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Killua",
    idade: "1 ano e meio",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["V1", "V2", "Raiva"],
    temperamento: "Tranquilo e observador",
    historia: "Gatinho ideal para ambientes calmos, gosta de cochilos e carinho.",
    imagem: "./Img/gatoBranco.png",
    especie: "Gato",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Amanda",
    idade: "6 meses",
    sexo: "Fêmea",
    tamanho: "Pequeno",
    vacinas: ["HamsterV1"],
    temperamento: "Ativa e curiosa",
    historia: "Adora correr na rodinha e explorar túneis.",
    imagem: "./Img/hamster.png",
    especie: "Roedor",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Ravier",
    idade: "2 anos",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["V8", "Raiva"],
    temperamento: "Energetico e companheiro",
    historia: "Pincher que adora brincar, alerta e muito fiel ao dono.",
    imagem: "./Img/pincher.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Denis",
    idade: "1 ano",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["CoelhoV1"],
    temperamento: "Dócil e sociável",
    historia: "Coelhinho que ama receber carinho e é muito limpo.",
    imagem: "./Img/coelhoBranco.png",
    especie: "Lagomorfo",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Remi",
    idade: "3 anos",
    sexo: "Fêmea",
    tamanho: "Médio",
    vacinas: ["V1", "V2", "Raiva"],
    temperamento: "Elegante e falante",
    historia: "Gato siamês que adora conversar e estar perto das pessoas.",
    imagem: "./Img/gatoSiames.png",
    especie: "Gato",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Thor",
    idade: "4 anos",
    sexo: "Macho",
    tamanho: "Grande",
    vacinas: ["V8", "Raiva"],
    temperamento: "Calmo e amigável",
    historia: "Bulldog que adora cochilar e passeios tranquilos.",
    imagem: "./Img/bulldog.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Jessica",
    idade: "4 anos",
    sexo: "Fêmea",
    tamanho: "Médio",
    vacinas: ["Anti-veneno"],
    temperamento: "Serena e observadora",
    historia: "Cobra marrom, ideal para quem já tem experiência com répteis.",
    imagem: "./Img/CobraMarrom.png",
    especie: "Réptil",
    selo: "./Img/Reptil.png"
  },
  {
    nome: "Garfield",
    idade: "5 anos",
    sexo: "Macho",
    tamanho: "Médio",
    vacinas: ["V1", "V2", "Raiva"],
    temperamento: "Preguiçoso e carismático",
    historia: "Gato laranja que ama comida, sonecas e atenção.",
    imagem: "./Img/gatoLaranja.png",
    especie: "Gato",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Fernando",
    idade: "2 anos",
    sexo: "Macho",
    tamanho: "Grande",
    vacinas: ["V8", "Raiva"],
    temperamento: "Ativo e sociável",
    historia: "Dálmata que ama correr, brincar ao ar livre e socializar.",
    imagem: "./Img/Dalmata.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Pompom",
    idade: "1 ano",
    sexo: "Fêmea",
    tamanho: "Pequeno",
    vacinas: ["CoelhoV1"],
    temperamento: "Fofo e curioso",
    historia: "Coelho ótimo para lares com crianças e outros pets.",
    imagem: "./Img/coelhoMesclado.png",
    especie: "Lagomorfo",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Chico",
    idade: "3 anos",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["V8", "Raiva"],
    temperamento: "Engraçado e carismático",
    historia: "Pug que adora soneca ou um petisco.",
    imagem: "./Img/pug.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Pilha",
    idade: "2 anos",
    sexo: "Fêmea",
    tamanho: "Pequeno",
    vacinas: ["Polyomavírus", "PBFD"],
    temperamento: "Simpática e cantadora",
    historia: "Calopsita que ama interagir e cantar.",
    imagem: "./Img/calopsita.png",
    especie: "Pássaro",
    selo: "./Img/Silvestre.png"
  },
  {
    nome: "Caramelo",
    idade: "3 anos",
    sexo: "Macho",
    tamanho: "Médio",
    vacinas: ["V8", "Raiva"],
    temperamento: "Carinhoso e brincalhão",
    historia: "Vira-lata que ama passear e brincar com bola.",
    imagem: "./Img/caramelo.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Haru",
    idade: "1 ano",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["CoelhoV1"],
    temperamento: "Inteligente e sociável",
    historia: "Coelho cinza que aprende comandos e adora carinho atrás das orelhas.",
    imagem: "./Img/coelhoCinza.png",
    especie: "Lagomorfo",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Ronaldo",
    idade: "2 anos",
    sexo: "Macho",
    tamanho: "Pequeno",
    vacinas: ["Polyomavírus", "PBFD"],
    temperamento: "Manso e delicado",
    historia: "Rolinha que gosta de voar em ambientes seguros e tranquilos.",
    imagem: "./Img/rolinhaPassaro.png",
    especie: "Pássaro",
    selo: "./Img/Silvestre.png"
  },
  {
    nome: "Mia",
    idade: "5 anos",
    sexo: "Fêmea",
    tamanho: "Grande",
    vacinas: ["V8", "Raiva"],
    temperamento: "Gentil e protetora",
    historia: "São Bernardo gigante e gentil, ótimo cão de companhia.",
    imagem: "./Img/saoBernardo.png",
    especie: "Cachorro",
    selo: "./Img/Clinico.png"
  },
  {
    nome: "Natasha",
    idade: "3 anos",
    sexo: "Fêmea",
    tamanho: "Médio",
    vacinas: ["Anti-veneno"],
    temperamento: "Dócil e exótica",
    historia: "Cobra albina, ideal para quem aprecia animais únicos.",
    imagem: "./Img/CobraBranca.png",
    especie: "Réptil",
    selo: "./Img/Reptil.png"
  }
];

function abreFichaPet(nomePet){
    const pet = fichasPets.find(p => p.nome === nomePet);
    if (!pet) return;

    // Preenche os campos do modal
    document.getElementById("modalPetImg").src = pet.imagem;
    document.getElementById("modalPetNome").textContent = pet.nome;
    document.getElementById("modalPetSelo").src = pet.selo;
    document.getElementById("modalPetTipo").textContent = pet.especie;
    document.getElementById("modalPetDesc").textContent = pet.descricao || "";
    document.getElementById("modalPetIdade").textContent = pet.idade;
    document.getElementById("modalPetSexo").textContent = pet.sexo;
    document.getElementById("modalPetTamanho").textContent = pet.tamanho;
    document.getElementById("modalPetVacinas").textContent = pet.vacinas.join(", ");
    document.getElementById("modalPetTemperamento").textContent = pet.temperamento;
    document.getElementById("modalPetHistoria").textContent = pet.historia;

    // Mostra o modal
    const modal = document.getElementById("modal-pet");
    modal.style.display = "flex";

    // Fecha clicando no X
    modal.querySelector(".fechar").onclick = () => modal.style.display = "none";

    // Fecha clicando fora do conteúdo
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
}
