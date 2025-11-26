const container = document.getElementById("lista-produtos");
const inputNome = document.getElementById("filtro-nome");
const selectCategoria = document.getElementById("filtro-categoria");

//Modal 

const modalMsg = document.getElementById('msg-modal');
const modalMsgClose = document.getElementById('modal-msg-close');
let resultadoMsg = document.querySelector(".mensagem");

let produtos = [];

function criarCard(prod) {
    const card = document.createElement("div");
    card.classList.add("prod-card");

    card.innerHTML = `
        <div class="conteudo-prod">
            <h4 class="tit-prod">${prod.titulo}</h4>
            <p class="subtit-prod">${prod.subtitulo}</p>
            <img class="img-prod" src="${prod.imagem}" alt="${prod.titulo}">
            <div class="preco-prod">
                <span class="preco-antigo">${prod.precoAntigo}</span>
                <span class="preco-novo">${prod.precoNovo}</span>
            </div>
            <button class="btn-prod">Comprar</button>
        </div>
    `;
    return card;
}

function renderizarProdutos(lista) {
    container.innerHTML = "";

    //Restaura os estilos flex para o layout dos cards
    if (container) {
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.gap = "30px";
        container.style.justifyContent = "center";
        container.style.alignItems = "flex-start"; // Use flex-start para manter o topo alinhado
    }

    lista.forEach(prod => {
        const card = criarCard(prod);
        container.appendChild(card);
    });
}

function aplicarFiltros() {
    const nomeBuscado = inputNome.value.toLowerCase();
    const categoriaSelecionada = selectCategoria.value;
    const urlParams = new URLSearchParams(window.location.search);
    const animalURL = urlParams.get("animal") || urlParams.get("categoria");
    const subcategoriaURL = urlParams.get("subcategoria");

    const filtrados = produtos.filter(prod => {
        const nomeMatch = prod.titulo.toLowerCase().includes(nomeBuscado) || prod.subtitulo.toLowerCase().includes(nomeBuscado);

        // Normalizar strings para comparar sem acentos
        const normalizar = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const categoriaMatch =
            categoriaSelecionada === "" ||
            normalizar(prod.categoria) === normalizar(categoriaSelecionada);

        const animalMatch =
            !animalURL ||
            normalizar(prod.categoria) === normalizar(animalURL);

        const subcategoriaMatch =
            !subcategoriaURL ||
            normalizar(prod.subcategoria || "") === normalizar(subcategoriaURL);

        return nomeMatch && categoriaMatch && animalMatch && subcategoriaMatch;
    });

    //VERIFICAR PRODUTOS APÓS O FILTRO 
    if (filtrados.length === 0) {
        exibirMensagemSemProduto();
        return;
    }

    renderizarProdutos(filtrados);
}

inputNome.addEventListener("input", aplicarFiltros);
selectCategoria.addEventListener("change", aplicarFiltros);

// Carregar produtos do JSON
fetch("./JS/JSON/produtos.json")
    .then(res => res.json())
    .then(data => {
        produtos = data;

        // Verifica parâmetros na URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoriaURL = urlParams.get("categoria") || urlParams.get("animal");

        if (categoriaURL) {
            selectCategoria.value = categoriaURL;
        }
        // VERIFICA se há produtos após o filtro
        if (!categoriaURL && produtos.length === 0) {
            exibirMensagemSemProduto();
            return;
        }

        aplicarFiltros();
    })
    .catch(err => console.error("Erro ao carregar produtos:", err));



// Função para exibir mensagem quando não há produtos
function exibirMensagemSemProduto() {
    if (selectCategoria) {
        selectCategoria.value = "";
    }

    let img = document.createElement("img");
    let response = document.createElement("p");

    response.textContent = "Ops! Não temos este produto ou ele está indisponível";
    img.src = "./Img/caoTriste.png";
    img.alt = "Nenhum produto encontrado";
    response.style.textAlign = "center";
    response.style.fontSize = "18px";
    response.style.marginTop = "20px";
    response.style.fontFamily = "'Rammetto One', sans-serif";
    response.style.color = "#ff7214ff";
    img.style.display = "block";
    img.style.margin = "40px auto";
    img.style.maxWidth = "300px";
    container.style.display = "block";
    container.style.alignItems = "center";

    container.innerHTML = ""; // Limpa o conteúdo atual
    container.appendChild(response);
    container.appendChild(img);


}
// _______________________________________________
// Carrinho

let carrinho = [];
let descontoAplicado = 0;

const carrinhoAside = document.getElementById("carrinho");
const carrinhoItens = document.getElementById("carrinho-itens");
const campoSubtotal = document.getElementById("carrinho-subtotal");
const campoDesconto = document.getElementById("carrinho-desconto");
const campoTotal = document.getElementById("carrinho-total");
const cupomInput = document.getElementById("cupom-input");

// Abrir carrinho
function abrirCarrinho() {
    carrinhoAside.classList.add("aberto");
}

// Fechar carrinho
function fecharCarrinho() {
    carrinhoAside.classList.remove("aberto");

}




// Adicionar produto
function adicionarAoCarrinho(prod) {
    let existente = carrinho.find(item => item.id === prod.id);

    if (existente) {
        existente.qtd++;
    } else {
        carrinho.push({
            id: prod.id,
            titulo: prod.titulo,
            preco: prod.precoNovo,
            imagem: prod.imagem,
            qtd: 1
        });
    }

    atualizarCarrinho();
    abrirCarrinho();
}

// Atualizar carrinho
function atualizarCarrinho() {
    carrinhoItens.innerHTML = "";
    let subtotal = 0;

    carrinho.forEach(item => {
        const precoNum = parseFloat(item.preco.replace("R$", "").replace(",", "."));
        subtotal += precoNum * item.qtd;

        const div = document.createElement("div");
        div.classList.add("item-carrinho");

        div.innerHTML = `
            <img src="${item.imagem}">
            <div>
                <p>${item.titulo}</p>
                <p>${item.preco}</p>

                <div class="qtd-controls">
                    <button class="menos">-</button>
                    <span>${item.qtd}</span>
                    <button class="mais">+</button>
                </div>
            </div>

            <span class="remove-item">🗑</span>
        `;

        // Eventos
        div.querySelector(".mais").addEventListener("click", () => {
            item.qtd++;
            atualizarCarrinho();
        });

        div.querySelector(".menos").addEventListener("click", () => {
            if (item.qtd > 1) item.qtd--;
            else carrinho = carrinho.filter(i => i.id !== item.id);
            atualizarCarrinho();
        });

        div.querySelector(".remove-item").addEventListener("click", () => {
            carrinho = carrinho.filter(i => i.id !== item.id);
            atualizarCarrinho();
        });

        carrinhoItens.appendChild(div);
    });

    // Exibição
    campoSubtotal.textContent = "R$ " + subtotal.toFixed(2).replace(".", ",");

    let descontoFinal = subtotal * descontoAplicado;
    campoDesconto.textContent = "R$ " + descontoFinal.toFixed(2).replace(".", ",");

    let totalFinal = subtotal - descontoFinal;
    campoTotal.textContent = "R$ " + totalFinal.toFixed(2).replace(".", ",");
    adicionarTotalModal(totalFinal);

}

let aplicarCupom = document.getElementById("aplicar-cupom");

aplicarCupom.addEventListener("click", (e) => {
    if (e.key === 'Enter') return;
    e.preventDefault();
    openModalMsg();
    // Verificação se o carrinho está vazio
    if (carrinho.length === 0) {
        openModalMsg(); 
        resultadoMsg.textContent = "Não é possível aplicar cupom, carrinho vazio!";
        return;
    }
    const cupomInput = document.getElementById("cupom-input");
    const cupom = cupomInput.value.trim().toUpperCase();


    // Pega cupons do localStorage
    const cupons = JSON.parse(localStorage.getItem("cuponsDisponiveis")) || [];
    if (cupom === "PET40") {
        descontoAplicado = 0.40;
        resultadoMsg.textContent = `Cupom ${cupom} aplicado!`;
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    }
    if (cupom === "DOA10") {
        descontoAplicado = 0.1;
        resultadoMsg.textContent = `Cupom ${cupom} aplicado!`;
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    }
    if (cupom === "DOA50") {
        descontoAplicado = 0.2;
        resultadoMsg.textContent = `Cupom ${cupom} aplicado!`;
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    } if (cupom === "DOA100") {
        descontoAplicado = 0.3;
        resultadoMsg.textContent = `Cupom ${cupom} aplicado!`;
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    } if (!cupons.includes(cupom)) {
        descontoAplicado = 0; // garante que o desconto global seja 0
        resultadoMsg.textContent = "Cupom inválido ou não disponível!";
        atualizarCarrinho(); // atualiza o carrinho
        return;
    } 




});
// Detectar clique no botão Comprar dentro dos cards
document.addEventListener("click", (e) => {

    // Garante que clique em spans ou textos dentro do botão ainda conte
    const btn = e.target.closest(".btn-prod");
    if (!btn) return;

    // Encontra o card do produto
    const card = btn.closest(".prod-card");

    const prod = {
        id: card.querySelector(".tit-prod").textContent,
        titulo: card.querySelector(".tit-prod").textContent,
        precoNovo: card.querySelector(".preco-novo").textContent,
        imagem: card.querySelector(".img-prod").src
    };

    adicionarAoCarrinho(prod);
});

// Função para exibir mensagem quando não há produtos no carrinho
function exibirMensagemSemItens() {

    let img = document.createElement("img");
    let response = document.createElement("p");
    response.textContent = "Ops! Seu carrinho está vazio!";
    img.src = "./Img/caoTriste.png";
    img.alt = "Nenhum produto encontrado no carrinho";
    response.style.textAlign = "center";
    response.style.fontSize = "18px";
    response.style.marginTop = "70px";
    response.style.fontFamily = "'Rammetto One', sans-serif";
    response.style.color = "#ff7214ff";
    img.style.display = "block";
    img.style.margin = "30px auto";
    img.style.maxWidth = "200px";
    carrinhoItens.style.display = "block";
    carrinhoItens.style.alignItems = "center";

    carrinhoItens.innerHTML = ""; // Limpa o conteúdo atual
    carrinhoItens.appendChild(response);
    carrinhoItens.appendChild(img);


}

// Lógica para abrir/fechar o carrinho ao clicar no ícone ou botão de compra
document.addEventListener('click', (e) => {
  // Clique no ícone do carrinho → alterna abrir/fechar
  const iconeCarrinho = e.target.closest('.cart-icon');
  if (iconeCarrinho) {
    if (carrinhoAside.classList.contains('aberto')) {
      fecharCarrinho();
    } else {
      abrirCarrinho();
    }
    return;
  }
  // Se o carrinho estiver vazio, mostra a mensagem e abre
  if (carrinho.length === 0) {
    exibirMensagemSemItens();
    abrirCarrinho();
    return;
  } 
  // Clique no botão comprar → abre carrinho
  const botaoCompra = e.target.closest('.btn-prod');
  if (botaoCompra) {
    abrirCarrinho();
    return;
  }

 // Clique fora do carrinho → fecha
  if (!carrinhoAside.contains(e.target)) {
    fecharCarrinho();
    return;
  }
  // se clicou dentro do aside → não fecha
  if (!carrinhoAside.classList.contains("aberto")) return;
  // se clicou em botão de produto → não fecha  
  if (e.target.closest(".btn-prod")) return;
  //se clicou em mais → não fecha
  if (e.target.closest(".mais")) return;
  //se clicou em menos → não fecha
  if (e.target.closest(".menos")) return; 

 
    
});

const abrirModal = document.getElementById('finalizar-compra'); // aqui é seu botão
const fecharModal = document.getElementById('fecharModal');
const modal = document.getElementById('modal');

const opcoes = document.querySelectorAll('.payment-option');
const passo1 = document.getElementById('step1');
const passo2 = document.getElementById('step2');
const back = document.getElementById('voltarStep1');

abrirModal.addEventListener('click', () => modal.classList.remove('hidden'));
fecharModal.addEventListener('click', () => modal.classList.add('hidden'));

opcoes.forEach(option => {
    option.addEventListener('click', () => {
        const method = option.dataset.method;

        // Esconde todos os forms
        document.querySelectorAll('#step2 form').forEach(f => f.classList.add('hidden'));

        // Mostra o form selecionado
        document.getElementById('form-' + method).classList.remove('hidden');


    });
});

back.addEventListener('click', () => {
    passo2.classList.add('hidden');
    passo1.classList.remove('hidden');
});

//Modal Mensagem
function openModalMsg() {
    modalMsg.style.display = 'flex';
    setTimeout(() => modalMsg.classList.add('show'), 10);
}

modalMsgClose.addEventListener('click', closeModalMsg);
modalMsg.addEventListener('click', (e) => { if (e.target === modalMsg) closeModalMsg(); });

function closeModalMsg() {
    setTimeout(() => modalMsg.style.display = 'none', 400);
}

