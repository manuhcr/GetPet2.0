// Mapa interativo - JS/mapa.js
const filiais = {
  // Estados com endereços
  "São_Paulo_BR": [
    "Av. Paulista, 1000 - São Paulo - SP (Matriz)",
    "Rua Independência, 300 - Campinas - SP",
    "Av. Getúlio Vargas, 450 - Ribeirão Preto - SP",
    "Rua das Palmeiras, 120 - Santos - SP",
    "Av. Brasil, 900 - São José dos Campos - SP"
  ],
  "Rio_de_Janeiro_BR": [
    "Rua das Laranjeiras, 350 - Rio de Janeiro - RJ",
    "Av. Roberto Silveira, 200 - Niterói - RJ",
    "Rua XV de Novembro, 500 - Petrópolis - RJ",
    "Av. Amaral Peixoto, 1000 - Campos dos Goytacazes - RJ",
    "Rua Prefeito José Vieira, 300 - Volta Redonda - RJ"
  ],
  "Minas_Gerais_BR": [
    "Av. Afonso Pena, 1000 - Belo Horizonte - MG",
    "Rua Halfeld, 500 - Juiz de Fora - MG",
    "Av. João Pinheiro, 800 - Montes Claros - MG",
    "Rua Tiradentes, 200 - Ouro Preto - MG",
    "Av. José Cândido da Silveira, 900 - Uberlândia - MG"
  ],
  "Paraná_BR": [
    "Rua XV de Novembro, 1000 - Curitiba - PR",
    "Av. Brasil, 500 - Londrina - PR",
    "Rua Marechal Deodoro, 300 - Maringá - PR",
    "Av. das Torres, 800 - Ponta Grossa - PR",
    "Rua Bento Munhoz, 700 - Cascavel - PR"
  ],
  "Santa_Catarina_BR": [
    "Rua Felipe Schmidt, 500 - Florianópolis - SC",
    "Av. Atlântica, 300 - Balneário Camboriú - SC",
    "Rua Hercílio Luz, 1000 - Blumenau - SC",
    "Av. Jorge Lacerda, 800 - Itajaí - SC",
    "Rua Tubarão, 250 - Joinville - SC"
  ],
  "Bahia_BR": [
    "Av. Sete de Setembro, 2000 - Salvador - BA",
    "Rua da Feira, 300 - Feira de Santana - BA",
    "Av. Lomanto Júnior, 400 - Vitória da Conquista - BA",
    "Rua da Orla, 150 - Porto Seguro - BA",
    "Av. ACM, 600 - Itabuna - BA"
  ],
  "Ceará_BR": [
    "Av. Beira Mar, 2000 - Fortaleza - CE",
    "Rua Coronel Jucá, 150 - Juazeiro do Norte - CE",
    "Av. Padre Cícero, 800 - Crato - CE",
    "Rua Domingos Olímpio, 400 - Sobral - CE",
    "Av. do Contorno, 100 - Iguatu - CE"
  ],
  "Pernambuco_BR": [
    "Av. Boa Viagem, 2000 - Recife - PE",
    "Rua do Sol, 500 - Olinda - PE",
    "Av. Guararapes, 900 - Caruaru - PE",
    "Rua dos Palmares, 700 - Petrolina - PE",
    "Av. Sete de Setembro, 300 - Garanhuns - PE"
  ],
  "Rio_Grande_do_Sul_BR": [
    "Rua dos Andradas, 1234 - Porto Alegre - RS",
    "Av. Bento Gonçalves, 800 - Caxias do Sul - RS",
    "Rua 15 de Novembro, 300 - Pelotas - RS",
    "Av. Getúlio Vargas, 1000 - Santa Maria - RS",
    "Rua Flores da Cunha, 400 - Passo Fundo - RS"
  ],

  // Novos 13 estados com endereços
  "Goiás_BR": [
    "Av. Anhanguera, 1000 - Goiânia - GO",
    "Rua 44, 500 - Anápolis - GO"
  ],
  "Mato_Grosso_BR": [
    "Av. Fernando Corrêa da Costa, 800 - Cuiabá - MT"
  ],
  "Mato_Grosso_do_Sul_BR": [
    "Av. Afonso Pena, 700 - Campo Grande - MS"
  ],
  "Espírito_Santo_BR": [
    "Av. Princesa Isabel, 300 - Vitória - ES"
  ],
  "Paraíba_BR": [
    "Rua Rodrigues de Aquino, 200 - João Pessoa - PB"
  ],
  "Rio_Grande_do_Norte_BR": [
    "Av. Rio Branco, 1000 - Natal - RN"
  ],
  "Alagoas_BR": [
    "Av. Álvaro Otacílio, 500 - Maceió - AL"
  ],
  "Sergipe_BR": [
    "Rua Laranjeiras, 100 - Aracaju - SE"
  ],
  "Piauí_BR": [
    "Av. Frei Serafim, 200 - Teresina - PI"
  ],
  "Tocantins_BR": [
    "Av. Teotônio Segurado, 500 - Palmas - TO"
  ],
  "Rondônia_BR": [
    "Av. Sete de Setembro, 1000 - Porto Velho - RO"
  ],
  "Roraima_BR": [
    "Av. Ville Roy, 200 - Boa Vista - RR"
  ],
  "Amapá_BR": [
    "Av. FAB, 300 - Macapá - AP"
  ],

};

const estadosMap = {
  AC: "Acre_BR",
  AL: "Alagoas_BR",
  AP: "Amapá_BR",
  AM: "Amazonas_BR",
  BA: "Bahia_BR",
  CE: "Ceará_BR",
  DF: "Distrito_Federal_BR",
  ES: "Espírito_Santo_BR",
  GO: "Goiás_BR",
  MA: "Maranhão_BR",
  MT: "Mato_Grosso_BR",
  MS: "Mato_Grosso_do_Sul_BR",
  MG: "Minas_Gerais_BR",
  PA: "Para_BR",
  PB: "Paraíba_BR",
  PR: "Paraná_BR",
  PE: "Pernambuco_BR",
  PI: "Piauí_BR",
  RJ: "Rio_de_Janeiro_BR",
  RN: "Rio_Grande_do_Norte_BR",
  RS: "Rio_Grande_do_Sul_BR",
  RO: "Rondônia_BR",
  RR: "Roraima_BR",
  SC: "Santa_Catarina_BR",
  SP: "São_Paulo_BR",
  SE: "Sergipe_BR",
  TO: "Tocantins_BR"
};


const mapaSvg = document.getElementById('wrapper'); //pai que vai guiar o botao
const botaoEstado = document.getElementById('botao-estado'); //filho guido pelo mapa pai
const botaoTexto = document.getElementById('botao-texto');

// Modal
const modal = document.getElementById('estado-modal');
const modalClose = document.getElementById('modal-close');
const modalEstadoNome = document.getElementById('modal-estado-nome');
const modalEndereco = document.getElementById('modal-endereco');
const idEstado = document.querySelectorAll('.estado');
const idParaSigla = {};
for (const sigla in estadosMap) {
  const id = estadosMap[sigla];
  idParaSigla[id] = sigla;
}

function mostrarBotao(idDoEstado) {
  botaoEstado.style.display = 'block';
const id = idDoEstado;  // Pega a sigla do id completo 
  const enderecos = filiais[idDoEstado];  // Busca os endereços
  if (enderecos && enderecos.length > 0) {
    botaoTexto.getBoundingClientRect()
    botaoTexto.textContent = `GetPet ${id
    .replace("_BR" , " ")
    .replace(/_/g , " ")}`;
    botaoTexto.classList.remove('disabled');

  botaoTexto.onclick = () => {
    modalEstadoNome.textContent = id.replace("_BR", " ").replace(/_/g, "");
    modalEndereco.innerHTML = enderecos.map(e => `<li class="endereços">${e}</li>`).join("");

    // Use a função openModal ao invés de mexer no display direto
    openModal();
};
  } else {
    botaoTexto.textContent = "Não temos filial";
    botaoTexto.classList.add('disabled');
    botaoTexto.onclick = null;
  }
}
mapaSvg.querySelectorAll('path').forEach(path => {
  path.addEventListener('click', (e) => {
    const id = e.target.id;            // ex: "Pernambuco_BR"
    const sigla = idParaSigla[id];     // ex: "PE"
    mostrarBotao(id, sigla);
  });
});


mapaSvg.querySelectorAll('text.sigla').forEach(text => {
  text.addEventListener('click', (e) => {
    const sigla = e.target.textContent;
    const id = estadosMap[sigla];       // mapeia para "Pernambuco_BR"
    mostrarBotao(id, e.target);
  });
});

function openModal() {
    // 1. Torna o modal visível imediatamente
    modal.style.display = 'flex';

    // 2. Dá um timeout mínimo para o browser registrar o display
    setTimeout(() => {
        modal.classList.add('show'); // inicia fade in
    }, 10);
}

// Fechar modal
function closeModal() {
    modal.classList.remove('show'); // inicia fade out
    setTimeout(() => {
        modal.style.display = 'none'; // esconde de fato depois da transição
    }, 400); // tempo igual ao transition
}


// Evento do botão de fechar
modalClose.addEventListener('click', closeModal);

// Fecha clicando fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});