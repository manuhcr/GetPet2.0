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
            <div class="detalhes-prod">
                <p class="desc-prod">${prod.descricao}</p>
                <div class="tabela-prod">
                    <div class="linha">
                        <span class="titulo">Categoria:</span>
                        <span class="valor">${prod.categoria}</span>
                    </div>
                    <div class="linha">
                        <span class="titulo">Porte:</span>
                        <span class="valor">${prod.porte}</span>
                    </div>
                    ${prod.subcategoria ? `
                        <div class="linha">
                            <span class="titulo">Subcategoria:</span>
                            <span class="valor">${prod.subcategoria}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
            <button class="btn-prod">Ver detalhes</button>
        </div>
    `;
    return card;
}

function renderizarProdutos(lista) {
    container.innerHTML = "";
  
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

        aplicarFiltros();
    })
    .catch(err => console.error("Erro ao carregar produtos:", err));