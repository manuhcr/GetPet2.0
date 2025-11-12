const bolinhas = document.querySelectorAll('.bolinha');
const iconeBolinha = document.querySelectorAll('.icone')
const dropdown = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');
const categorias = [
    {
        nome: "Cachorro",
        valor: "cachorro",
        backgroundColor: "#005A53", // Cor da bolinha
        textColor: "#FFFFFF", // Branco para bom contraste
        subcategorias: [
            { nome: "Ração e Petiscos", valor: "racao" },
            { nome: "Roupas e Acessórios", valor: "roupas" },
            { nome: "Coleiras, Guias e Peitorais", valor: "coleiras" },
            { nome: "Caminhas e Casinhas", valor: "caminhas" },
            { nome: "Proteção e Adestramento", valor: "protecao" },
            { nome: "Acessórios para Alimentação", valor: "alimentacao" },
            { nome: "Medicamentos", valor: "medicamentos" },
            { nome: "Higiene e Limpeza", valor: "higiene" },
            { nome: "Transporte", valor: "transporte" },
            { nome: "Brinquedos", valor: "brinquedos" }
        ]
    },
    {
        nome: "Gato",
        valor: "gato",
        backgroundColor: "#71AB3E",
        textColor: "#FFFFFF", // Branco para bom contraste
        subcategorias: [
            { nome: "Ração", valor: "racao" },
            { nome: "Tocas e Caminhas", valor: "tocas" },
            { nome: "Petiscos", valor: "petiscos" },
            { nome: "Transporte", valor: "transporte" },
            { nome: "Proteção", valor: "protecao" },
            { nome: "Arranhadores e Brinquedos", valor: "arranhadores" },
            { nome: "Higiene e Limpeza", valor: "higiene" },
            { nome: "Medicamentos", valor: "medicamentos" },
            { nome: "Acessórios de Alimentação", valor: "alimentacao" },
            { nome: "Roupas e Acessórios", valor: "roupas" }
        ]
    },
    {
        nome: "Pássaro",
        valor: "passaro",
        backgroundColor: "#F5844E",
        textColor: "#333333", // Cinza escuro para contraste com fundo claro
        subcategorias: [
            { nome: "Ração para Pássaros", valor: "racao" },
            { nome: "Gaiolas e Ninhos", valor: "gaiolas" },
            { nome: "Acessórios e Brinquedos", valor: "acessorios" },
            { nome: "Medicamentos", valor: "medicamentos" },
            { nome: "Higiene e Limpeza", valor: "higiene" }
        ]
    },
    {
        nome: "Peixe",
        valor: "peixe",
        backgroundColor: "#C57F51",
        textColor: "#fffff", // Cinza escuro para contraste com fundo muito claro
        subcategorias: [
            { nome: "Ração para Peixes", valor: "racao" },
            { nome: "Aquários e Acessórios", valor: "aquarios" },
            { nome: "Filtros e Bombas", valor: "filtros" },
            { nome: "Medicamentos", valor: "medicamentos" },
            { nome: "Higiene e Limpeza", valor: "higiene" }
        ]
    },
    {
        nome: "Roedor",
        valor: "roedor",
        backgroundColor: "#3A1F03",
        textColor: "#FFFFFF", // Branco para bom contraste
        subcategorias: [
            { nome: "Ração e Alimentos", valor: "racao" },
            { nome: "Gaiolas e Acessórios", valor: "gaiolas" },
            { nome: "Serragens e Granulados", valor: "serragens" },
            { nome: "Feno e Alfafa", valor: "feno" },
            { nome: "Ninhos e Camas", valor: "ninhos" },
            { nome: "Brinquedos", valor: "brinquedos" }
        ]
    }
];

bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => {
        const isActive = bolinha.classList.contains('active');

        bolinhas.forEach(b => b.classList.remove('active'));

        if (isActive) {
            dropdown.style.display = 'none';
        } else {
            bolinha.classList.add('active');
            const categoria = categorias[index];

            dropdown.style.display = 'block';
            dropdown.style.backgroundColor = categoria.backgroundColor;
            dropdown.style.setProperty('--triangulo-color', categoria.backgroundColor);
            dropdown.style.color = categoria.textColor; // Aplica a cor do texto
            setTimeout(() => { }, 0);
            // Adicionar subcategorias ao lado do link "Ver produtos"
            const subcategoriasHTML = categoria.subcategorias
                .map(subcat => `
                    <a href="produtos.html?animal=${encodeURIComponent(categoria.valor)}&subcategoria=${encodeURIComponent(subcat.valor)}" class="subcat-link">
                        ${subcat.nome}
                    </a>
                `)
                .join('');

            dropdownContent.innerHTML = `
                <div class="dropdown-links">
                    <div class="subcat-container">${subcategoriasHTML}</div>
                </div>
            `;

            // Posicionar triângulo
            const bolinhaRect = bolinha.getBoundingClientRect();
            const dropdownRect = dropdown.getBoundingClientRect();
            const trianguloLeft = bolinhaRect.left + bolinhaRect.width / 2 - dropdownRect.left - 15;
            dropdown.style.setProperty('--triangulo-left', `${trianguloLeft}px`);
        }
    });
});

// Esconder dropdown ao clicar fora
document.addEventListener('click', (e) => {
    // Verifica se o clique NÃO foi dentro do dropdown E
    // NÃO foi na bolinha E
    // NÃO foi na imagem dentro da bolinha
    if (!dropdown.contains(e.target) &&
        !e.target.classList.contains('bolinha') &&
        !e.target.closest('.bolinha')) { // Usa closest para verificar se o elemento clicado (ou um pai dele) é uma bolinha
        dropdown.style.display = 'none';
        bolinhas.forEach(b => b.classList.remove('active'));
    }
});

