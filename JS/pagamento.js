/* ------------ MODAL ------------ */

const abrirModalBtn = document.getElementById('finalizar-compra');
const fechar = document.getElementById('fecharModal');
const modalPag = document.getElementById('modal');

const passo1 = document.getElementById('step1');
const passo2 = document.getElementById('step2');
const voltar = document.getElementById('voltarStep1');

abrirModalBtn.addEventListener('click', () => {
    modalPag.style.display = 'flex';
});

fechar.addEventListener('click', () => {
    modalPag.style.display = 'none';
    resetSteps();
});

function resetSteps(){
    passo2.classList.remove('active');
    passo1.classList.add('active');
}


/* ------------ PAYMENT OPTIONS ------------ */

// Seleciona todas as opções de pagamento
const options = document.querySelectorAll('.payment-option');

options.forEach(option => {
    option.addEventListener('click', () => {
        // Remove a seleção de todas
        options.forEach(o => o.classList.remove('selected'));

        // Marca a opção clicada como selecionada
        option.classList.add('selected');

        // Pega o método escolhido (pix, card, google, etc.)
        const method = option.dataset.method;

        // Esconde todos os forms de pagamento
        document.querySelectorAll('.payment-form')
            .forEach(f => f.style.display = "none");

        // Mostra só o form correspondente
        document.getElementById("form-" + method).style.display = "flex";

        // Vai para o step 2
        passo1.classList.remove('active');
        passo2.classList.add('active');
    });
});

// Botão de voltar do step2 para step1
voltar.addEventListener('click', () => {
    passo2.classList.remove('active');
    passo2.classList.add('active');
});

/* ------------ CARTÃO: ELEMENTOS ------------ */

// Container do cartão que faz o flip
const flipInner = document.querySelector(".flip-card-inner");

// Inputs do formulário do cartão
const cardNumberInput = document.getElementById("card-number-input");
const cardNameInput = document.getElementById("card-name-input");
const cardExpiryInput = document.getElementById("card-expiry-input");
const cardCvvInput = document.getElementById("card-cvv-input");

/* PREVIEW DO CARTÃO */

// Elementos que mostram a pré-visualização do cartão
const prevLogo = document.querySelector(".card-logo");
const prevNumber = document.querySelector(".card-number");
const prevName = document.querySelector(".card-name");
const prevExpiry = document.querySelector(".card-expiry");
const prevCvv = document.querySelector(".code");

/* ------------ FLIP DO CARTÃO ------------ */

// Quando o usuário foca no CVV, vira o cartão
cardCvvInput.addEventListener("focus", () => {
    flipInner.classList.add("flipped");
});
// Quando tira o foco, volta para frente
cardCvvInput.addEventListener("blur", () => {
    flipInner.classList.remove("flipped");
});

/* ------------ MÁSCARAS E PREVIEW ------------ */

/* Número do cartão */
cardNumberInput.addEventListener("input", e => {
    // Remove tudo que não é número
    let v = e.target.value.replace(/\D/g, "");
    // Limita a 16 dígitos
    v = v.substring(0,16);
    // Adiciona espaço a cada 4 dígitos
    v = v.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Atualiza input e preview
    e.target.value = v;
    prevNumber.textContent = v || "#### #### #### ####";

    // Detecta bandeira do cartão (Visa, Master, etc.)
    detectCardFlag(v.replace(/\s/g, ""));
});

/* Nome do titular */
cardNameInput.addEventListener("input", e => {
    prevName.textContent = e.target.value || "NOME NO CARTÃO";
});

/* Validade do cartão */
cardExpiryInput.addEventListener("input", e => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.substring(0,4);

    // Formata MM/AA
    if (v.length >= 3)
        v = v.replace(/(\d{2})(\d{1,2})/, "$1/$2");

    e.target.value = v;
    prevExpiry.textContent = v || "MM/AA";
});

/* CVV */
cardCvvInput.addEventListener("input", e => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.substring(0,4);
    e.target.value = v;
    prevCvv.textContent = v || "CVV";
});


/* ------------ DETECÇÃO DA BANDEIRA ------------ */
const logoVisa = `
<svg width="48" height="16" viewBox="0 0 90 30" xmlns="http://www.w3.org/2000/svg">
  <path fill="#1A1F71" d="M38.2 29.6l4.3-28.6h6.8l-4.3 28.6h-6.8zm31.5-27.6c-1.4-.5-3.6-1-6.3-1-6.9 0-11.7 3.5-11.8 8.5-.1 3.7 3.5 5.8 6.2 7 2.8 1.3 3.7 2.1 3.7 3.3-.1 1.8-2.2 2.6-4.3 2.6-2.9 0-4.4-.4-6.8-1.4l-.9-.4-1 6.4c1.7.7 5 1.3 8.3 1.3 7.8 0 12.9-3.4 13-8.8.1-3-2-5.3-6.3-7.1-2.6-1.2-4.2-2-4.2-3.2 0-1.1 1.4-2.3 4.3-2.3 2.4 0 4.2.5 5.5 1.1l.7.3 1-6.1-.3-.2zM25.8 1l-6.6 19-2.7-13.7C15.8 3.2 13 1 9.5 1H.3L.2 1.5c5 1.2 9.5 3.1 12.6 5.4l5.4 22.7h7.4L34.4 1h-8.6zM83 1.1h-6c-1.9 0-3.3.5-4.1 2.3l-11.5 26.2h8.1s1.3-3.5 1.6-4.2h9.9c.2 1 1 4.2 1 4.2h7.2L83 1.1zm-9.9 18c.7-1.8 3.4-8.8 3.4-8.8s.7-1.8 1.1-2.9l.6 2.6s1.6 7.6 2 9.1h-7.1z"/>
</svg>
`;

const logoMastercard = `
<svg width="48" height="30" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
  <circle cx="18" cy="15" r="12" fill="#EB001B"/>
  <circle cx="30" cy="15" r="12" fill="#F79E1B"/>
  <path d="M24 15a12 12 0 0 1-6 10.4A12 12 0 0 0 30 25.4 12 12 0 0 1 24 15z" fill="#FF5F00"/>
</svg>
`;

const logoAmex = `
<svg width="64" height="20" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
  <rect width="135" height="40" fill="#2E77BC"/>
  <path fill="#FFF" d="M15 28h-3l-1-4H5l-1 4H1l6-16h4l6 16zm-9-6h5l-2-6h-1l-2 6zm24 6h-10V12h10v3h-6v2h5v3h-5v3h6v3zm17-9.5L44 28h-4l-2-3.5L36 28h-4l-3-9.5L26 12h4l2 6 2-6h4l2 6 2-6h4l-8 19h-4l3-9.5z"/>
</svg>
`;

const logoElo = `
<svg width="48" height="20" viewBox="0 0 48 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="7" fill="#00A6DE"/>
  <circle cx="24" cy="10" r="7" fill="#EF4123"/>
  <circle cx="38" cy="10" r="7" fill="#FCD116"/>
  <circle cx="24" cy="10" r="4" fill="#000"/>
</svg>
`;

function detectCardFlag(n){
    // Se o número do cartão começa com 4
if (/^4/.test(n)) {
    // Mostra o logo da Visa no cartão
    prevLogo.innerHTML = logoVisa;
    return; // Sai da função, porque já encontrou a bandeira
}

// Se o número do cartão começa com 51, 52, 53, 54 ou 55
if (/^5[1-5]/.test(n)) {
    // Mostra o logo do Mastercard no cartão
    prevLogo.innerHTML = logoMastercard;
    return;
}

// Se o número do cartão começa com 34 ou 37
if (/^3[47]/.test(n)) {
    // Mostra o logo do American Express (Amex) no cartão
    prevLogo.innerHTML = logoAmex;
    return;
}

// Se o número do cartão começa com qualquer um desses prefixos específicos do Elo
if (/^(4011|4312|4389|4514|4576|5041|5067|509|6277|6362)/.test(n)) {
    // Mostra o logo do Elo no cartão
    prevLogo.innerHTML = logoElo;
    return;
}

// Se nenhum dos anteriores bateu, não mostra nenhum logo
prevLogo.innerHTML = "";

}
