document.addEventListener("DOMContentLoaded", () => {
    // Função para registrar cupons no localStorage
function registrarCupom(cupom) {
    let cupons = JSON.parse(localStorage.getItem("cuponsDisponiveis")) || [];
    if (!cupons.includes(cupom)) {
        cupons.push(cupom);
        localStorage.setItem("cuponsDisponiveis", JSON.stringify(cupons));
        alert(`Parabéns! Você ganhou o cupom ${cupom}`);
    } else {
        alert(`Você já possui o cupom ${cupom}`);
    }
}

// Clique no botão de doação
document.querySelector(".btn-doacao.primario").addEventListener("click", (e) => {
    e.preventDefault();

    // Perguntar valor da doação
    let valor = parseFloat(prompt("Digite o valor da doação em R$:", "10"));
    if (isNaN(valor) || valor <= 0) return alert("Valor inválido!");

    // Definir cupom de acordo com o valor
    if (valor >= 10 && valor < 50) registrarCupom("DOA10");
    else if (valor >= 50 && valor < 100) registrarCupom("DOA50");
    else if (valor >= 100) registrarCupom("DOA100");
    else alert("Doação abaixo do valor mínimo para gerar cupom.");
});

// Aplicar cupom
document.getElementById("aplicar-cupom").addEventListener("click", () => {
    const cupomInput = document.getElementById("cupom-input");
    const cupom = cupomInput.value.trim().toUpperCase();

    // Pega cupons do localStorage
    const cupons = JSON.parse(localStorage.getItem("cuponsDisponiveis")) || [];

    if (!cupons.includes(cupom)) {
        descontoAplicado = 0; // garante que o desconto global seja 0
        alert("Cupom inválido ou não disponível!");
        atualizarCarrinho(); // atualiza o carrinho
        return;
    }

    // Aplica o desconto global
    if (cupom === "DOA10") descontoAplicado = 0.1;
    if (cupom === "DOA50") descontoAplicado = 0.2;
    if (cupom === "DOA100") descontoAplicado = 0.3;

    alert(`Cupom ${cupom} aplicado!`);
    atualizarCarrinho(); // atualiza carrinho com o desconto aplicado
});

});


