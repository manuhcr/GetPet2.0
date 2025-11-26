document.addEventListener("DOMContentLoaded", () => {
    // Função para registrar cupons no localStorage
let botaoDoacao = document.querySelector(".btn-doacao.primario");
const modalDoar = document.getElementById('doacao-modal');
const modalMsg = document.getElementById('msg-modal');
const modalDoarClose = document.getElementById('modal-doar-close');
const modalMsgClose = document.getElementById('modal-msg-close');
let frase = document.querySelector('.mensagem');
function registrarCupom(cupom) {
    closeModalDoar();
    openModalMsg();
    let cupons = JSON.parse(localStorage.getItem("cuponsDisponiveis")) || [];
      
         
    if (!cupons.includes(cupom)) {
        cupons.push(cupom);
        localStorage.setItem("cuponsDisponiveis", JSON.stringify(cupons));
      
        frase.textContent = `Parabéns! Você ganhou o cupom  ${cupom}`
    } else {
        frase.textContent = `Você já possui o cupom ${cupom}`;
    }
}
let inputDoacao = document.querySelector('.input-doacao');
let botaoConfirma = document.querySelector('.confirmar-doacao')
// Clique no botão de doação
botaoDoacao.addEventListener("click", (e) => {
    e.preventDefault();
    openModalDoar()
});
 botaoConfirma.addEventListener("click", (e) => {
// Perguntar valor da doação
    let valor = parseFloat(inputDoacao.value);
   
    if (isNaN(valor) || valor <= 0) return frase.textContent = "Valor inválido!";

    // Definir cupom de acordo com o valor
    if (valor >= 10 && valor < 50) registrarCupom("DOA10");
    else if (valor >= 50 && valor < 100) registrarCupom("DOA50");
    else if (valor >= 100) registrarCupom("DOA100");
    else if (valor < 100) frase.textContent = "Valor muito alto para emitir cupom!"
    else frase.textContent = "Doação abaixo do valor mínimo para gerar cupom.";
    })

//Modal Doação
function openModalDoar() {
    modalDoar.style.display = 'flex';
    setTimeout(() => modalDoar.classList.add('show'), 10);
}

function closeModalDoar() {
    modalDoar.classList.remove('show');
    setTimeout(() => modalDoar.style.display = 'none', 400);
}

modalDoarClose.addEventListener('click', closeModalDoar);
modalDoar.addEventListener('click', (e) => { if (e.target === modalDoar) closeModalDoar(); });

//Modal Mensagem
function openModalMsg() {
    modalMsg.style.display = 'flex';
    setTimeout(() => modalMsg.classList.add('show'), 10);
}

function closeModalMsg() {
    modalMsg.classList.remove('show');
    setTimeout(() => modalMsg.style.display = 'none', 400);
}

modalMsgClose.addEventListener('click', closeModalMsg);
modalMsg.addEventListener('click', (e) => { if (e.target === modalMsg) closeModalMsg(); });
});