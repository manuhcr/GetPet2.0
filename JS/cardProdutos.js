const container = document.getElementById("lista-produtos");
const inputNome = document.getElementById("filtro-nome");
const selectCategoria = document.getElementById("filtro-categoria");

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

        const btn = card.querySelector(".btn-prod");
        const detalhes = card.querySelector(".detalhes-prod");

        btn.addEventListener("click", () => {
            document.querySelectorAll(".detalhes-prod.aberto").forEach(outro => {
                if (outro !== detalhes) {
                    outro.classList.remove("aberto");
                }
            });

            detalhes.classList.toggle("aberto");
        });
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

// Fechar carrinho ao clicar fora
document.addEventListener("click", (e) => {
    // Só se o carrinho estiver aberto
    if (carrinhoAside.classList.contains("aberto")) {
        // Se o clique não foi dentro do carrinho nem no botão de produto
        if (!carrinhoAside.contains(e.target) && !e.target.closest(".btn-prod")) {
            fecharCarrinho();
        }
    }
});


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
}

// // Aplicar cupom
// document.getElementById("aplicar-cupom").addEventListener("click", () => {
//     const cupom = cupomInput.value.trim().toUpperCase();


// });
// Aplicar cupom
let aplicarCupom = document.getElementById("aplicar-cupom");
aplicarCupom.addEventListener("click", () => {
    const cupomInput = document.getElementById("cupom-input");
    const cupom = cupomInput.value.trim().toUpperCase();

    // Pega cupons do localStorage
    const cupons = JSON.parse(localStorage.getItem("cuponsDisponiveis")) || [];
    if (cupom === "PET40") {
        descontoAplicado = 0.10;
        alert(`Cupom ${cupom} aplicado!`);
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    }
    if (cupom === "DOA10") {
        descontoAplicado = 0.1;
        alert(`Cupom ${cupom} aplicado!`);
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    }
    if (cupom === "DOA50") {
        descontoAplicado = 0.2;
        alert(`Cupom ${cupom} aplicado!`);
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    } if (cupom === "DOA100") {
        descontoAplicado = 0.3;
        alert(`Cupom ${cupom} aplicado!`);
        atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
    } if (!cupons.includes(cupom)) {
        descontoAplicado = 0; // garante que o desconto global seja 0
        alert("Cupom inválido ou não disponível!");
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

        // Passa para o step 2
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    });
});

back.addEventListener('click', () => {
    passo2.classList.add('hidden');
    passo1.classList.remove('hidden');
});