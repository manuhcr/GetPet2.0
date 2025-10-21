// Mapa interativo - JS/mapa.js
const filiais = {
  "São_Paulo_BR": [
    "Av. Paulista, 1000 - São Paulo -  SP (Matriz)",
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
  ]
};

const infoBox = document.getElementById('info-box');
const estadoNome = document.getElementById('estado-nome');
const endereco = document.getElementById('endereco');

document.querySelectorAll('svg path').forEach(path => {
  path.addEventListener('click', (e) => {
    const id = e.target.id; // é o ID do estado clicado, ex: "Rio_Grande_do_Sul_BR"
    
    // atualiza o conteúdo da caixa de informação   
    switch(id){
      case "Rio_Grande_do_Sul_BR":
        estadoNome.textContent = "Rio Grande do Sul";
        break; 
      case "São_Paulo_BR":
        estadoNome.textContent = "São Paulo";
        break;
      case "Minas_Gerais_BR":
        estadoNome.textContent = "Minas Gerais";
        break;
      case "Rio_de_Janeiro_BR":
        estadoNome.textContent = "Rio de Janeiro";
        break;      
      case "Paraná_BR":
        estadoNome.textContent = "Paraná";
        break;
      case "Santa_Catarina_BR":
        estadoNome.textContent = "Santa Catarina";
        break
      case "Bahia_BR":
        estadoNome.textContent = "Bahia";
        break;  
      case "Ceará_BR":
        estadoNome.textContent = "Ceará";
        break;
      case "Pernambuco_BR":
        estadoNome.textContent = "Pernambuco";
        break;
      case "Goiás_BR":
        estadoNome.textContent = "Goiás";
        break;
      case "Distrito_Federal_BR":
        estadoNome.textContent = "Distrito Federal"
        break
      // outros casos...
      default:
        estadoNome.textContent = "Estado sem filial";
    }
    const enderecos = filiais[id];
  if (enderecos) {
      document.getElementById('endereco').innerHTML =
        enderecos.map(e => `<li>${e}</li>`).join("");
    } else {
      document.getElementById('endereco').innerHTML =
        "<li>Não temos endereços neste estado.</li>";
    }

  });
});