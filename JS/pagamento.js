/* ------------ MODAL ------------ */

const abrirModalBtn = document.getElementById('finalizar-compra');
const fechar = document.getElementById('fecharModal');
const modalPag = document.getElementById('modal');
const passoOne = document.getElementById('step1');
const passoTwo = document.getElementById('step2');
const voltar = document.getElementById('voltarStep1');

abrirModalBtn.addEventListener('click', () => {
    modalPag.style.display = 'flex';
});

fechar.addEventListener('click', () => {
    modalPag.style.display = 'none';
    resetSteps();
});

function resetSteps() {
    passoTwo.classList.remove('active');
    passoOne.classList.add('active');
}


/* ------------ PAYMENT OPTIONS ------------ */

// Seleciona todas as opções de pagamento
const options = document.querySelectorAll('.payment-option');
let card = document.getElementById("cartao");


function adicionarTotalModal(total){
    const modalTotal = document.getElementById('modal-total');
    if(modalTotal){
        modalTotal.textContent = "R$ " + total.toFixed(2).replace(".", ",")
    }
}
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
        if (method !='card'){ 
          card.style.display = "none";
        } else {
          card.style.display = "flex";
        }
        

        // Mostra só o form correspondente
        document.getElementById("form-" + method).style.display = "flex";

        // Vai para o step 2
        passoOne.classList.remove('active');
        passoTwo.classList.add('active');
    });
});

// Botão de voltar do step2 para step1
voltar.addEventListener('click', () => {
    passoTwo.classList.remove('active');
    passoOne.classList.add('active');
});

/* ------------ CARTÃO: ELEMENTOS ------------ */

// Container do cartão que faz o flip
const flipInner = document.querySelector(".flip-card-inner");
const corCardFrente = document.getElementById("frente");
const corCardTras = document.getElementById("tras");

// Inputs do formulário do cartão
const cardNumberInput = document.getElementById("card-number-input");
const cardNameInput = document.getElementById("card-name-input");
const cardExpiryInput = document.getElementById("card-expiry-input");
const cardCvvInput = document.getElementById("card-cvv-input");

/* PREVIEW DO CARTÃO */

// Elementos que mostram a pré-visualização do cartão
const prevLogo = document.querySelector(".logo");
const prevNumber = document.querySelector(".number");
const prevName = document.querySelector(".name");
const prevExpiry = document.querySelector(".date_8264");
const prevCvv = document.querySelector(".code");
const prevNameCard = document.querySelector('.heading_8264')

/* ------------ FLIP DO CARTÃO ------------ */

/* safe guards */
function safeAddListener(el, ev, fn) {
    el && el.addEventListener(ev, fn);
}

/* flip on focus CVV */
safeAddListener(cardCvvInput, 'focus', () => { flipInner.classList.add('flipped'); });
safeAddListener(cardCvvInput, 'blur', () => { flipInner.classList.remove('flipped'); });
/* ------------ MÁSCARAS E PREVIEW ------------ */

/* Número do cartão */
cardNumberInput.addEventListener("input", e => {
    // Remove tudo que não é número
    let v = e.target.value.replace(/\D/g, "");
    // Limita a 16 dígitos
    v = v.substring(0, 16);
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
    v = v.substring(0, 4);

    // Formata MM/AA
    if (v.length >= 3)
        v = v.replace(/(\d{2})(\d{1,2})/, "$1/$2");

    e.target.value = v;
    prevExpiry.textContent = v || "MM/AA";
});

/* CVV */
cardCvvInput.addEventListener("input", e => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.substring(0, 4);
    e.target.value = v;
    prevCvv.textContent = v || "CVV";
});


/* ------------ DETECÇÃO DA BANDEIRA ------------ */
const logoVisa = `
<svg width = "40px" height = "40px" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="Layer_1" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 750 471" enable-background="new 0 0 750 471" xml:space="preserve" sodipodi:docname="visa.svg" inkscape:version="0.92.2 5c3e80d, 2017-08-06" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata id="metadata4882"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> </cc:work> </rdf:rdf> </metadata> <defs id="defs4880"></defs> <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1428" inkscape:window-height="869" id="namedview4878" showgrid="false" inkscape:zoom="0.384" inkscape:cx="83.333333" inkscape:cy="235.5" inkscape:window-x="164" inkscape:window-y="478" inkscape:window-maximized="0" inkscape:current-layer="Layer_1"></sodipodi:namedview> <title id="title4867">Slice 1</title> <desc id="desc4869">Created with Sketch.</desc> <g id="visa" sketch:type="MSLayerGroup"> <path id="Shape" sketch:type="MSShapeGroup" fill="#0E4595" d="M278.198,334.228l33.36-195.763h53.358l-33.384,195.763H278.198 L278.198,334.228z"></path> <path id="path13" sketch:type="MSShapeGroup" fill="#0E4595" d="M524.307,142.687c-10.57-3.966-27.135-8.222-47.822-8.222 c-52.725,0-89.863,26.551-90.18,64.604c-0.297,28.129,26.514,43.821,46.754,53.185c20.77,9.597,27.752,15.716,27.652,24.283 c-0.133,13.123-16.586,19.116-31.924,19.116c-21.355,0-32.701-2.967-50.225-10.274l-6.877-3.112l-7.488,43.823 c12.463,5.466,35.508,10.199,59.438,10.445c56.09,0,92.502-26.248,92.916-66.884c0.199-22.27-14.016-39.216-44.801-53.188 c-18.65-9.056-30.072-15.099-29.951-24.269c0-8.137,9.668-16.838,30.559-16.838c17.447-0.271,30.088,3.534,39.936,7.5l4.781,2.259 L524.307,142.687"></path> <path id="Path" sketch:type="MSShapeGroup" fill="#0E4595" d="M661.615,138.464h-41.23c-12.773,0-22.332,3.486-27.941,16.234 l-79.244,179.402h56.031c0,0,9.16-24.121,11.232-29.418c6.123,0,60.555,0.084,68.336,0.084c1.596,6.854,6.492,29.334,6.492,29.334 h49.512L661.615,138.464L661.615,138.464z M596.198,264.872c4.414-11.279,21.26-54.724,21.26-54.724 c-0.314,0.521,4.381-11.334,7.074-18.684l3.607,16.878c0,0,10.217,46.729,12.352,56.527h-44.293V264.872L596.198,264.872z"></path> <path d="M 45.878906 138.46484 L 45.197266 142.53711 C 66.290228 147.64311 85.129273 155.0333 101.62305 164.22656 L 148.96875 333.91406 L 205.42383 333.85156 L 289.42773 138.46484 L 232.90234 138.46484 L 180.66406 271.96094 L 175.09961 244.83008 C 174.83893 243.99185 174.55554 243.15215 174.26562 242.31055 L 156.10547 154.99219 C 152.87647 142.59619 143.50892 138.89684 131.91992 138.46484 L 45.878906 138.46484 z " id="path16" style="fill:#0e4595;fill-opacity:1"></path> </g> </g></svg>
`;

const logoMastercard = `
<svg width="38px" height="38px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <circle cx="7" cy="12" r="7" fill="#EA001B"></circle> <circle cx="17" cy="12" r="7" fill="#FFA200" fill-opacity=".8"></circle> </g> </g></svg>
`;

const logoAmex = `
<svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#002663" fill-rule="evenodd" d="M4.31351102,11.9651322 L3.49408345,9.96838176 L2.67933919,11.9651322 L4.31351102,11.9651322 Z M12.1730058,14.1264026 L12.1684736,10.2036046 L10.4324776,14.1264026 L9.38130189,14.1264026 L7.64077369,10.2001299 L7.64077369,14.1264026 L5.20575645,14.1264026 L4.74573489,13.0092074 L2.25300723,13.0092074 L1.78830236,14.1264026 L0.488004966,14.1264026 L2.63190183,9.11768179 L4.41065186,9.11768179 L6.44683267,13.8599073 L6.44683267,9.11768179 L8.40082901,9.11768179 L9.96762165,12.5154962 L11.4069075,9.11768179 L13.4001832,9.11768179 L13.4001832,14.1264026 L12.1730058,14.1264026 Z M15.3055732,13.1015049 L15.3055732,12.104716 L17.9339657,12.104716 L17.9339657,11.0825466 L15.3055732,11.0825466 L15.3055732,10.171719 L18.3071194,10.171719 L19.6166324,11.6317021 L18.2491069,13.1015049 L15.3055732,13.1015049 Z M23.4171068,14.1455801 L21.8614469,14.1455801 L20.3872629,12.4870853 L18.8552174,14.1455801 L14.1129918,14.1455801 L14.1129918,9.13565077 L18.9281863,9.13565077 L20.4011617,10.7778295 L21.9239917,9.13565077 L23.488005,9.13565077 L21.1613628,11.6406155 L23.4171068,14.1455801 Z"></path> </g></svg>
`;

const logoElo = `
<svg width="50px" height="50px" viewBox="0 -140 780 780" enable-background="new 0 0 780 500" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m166.5 184.95c6.8-2.3 14.1-3.5 21.7-3.5 33.2 0 60.9 23.6 67.2 54.9l47-9.6c-10.8-53.2-57.8-93.3-114.2-93.3-12.9 0-25.3 2.1-36.9 6l15.2 45.5z" fill="#FFF100"></path><path d="m111 337.35l31.8-36c-14.2-12.6-23.1-30.9-23.1-51.4 0-20.4 8.9-38.8 23.1-51.3l-31.8-35.9c-24.1 21.4-39.3 52.5-39.3 87.3 0 34.7 15.2 65.899 39.3 87.3z" fill="#00A3DF"></path><path d="m255.4 263.75c-6.4 31.3-34 54.8-67.2 54.8-7.6 0-14.9-1.2-21.8-3.5l-15.2 45.5c11.6 3.899 24.1 6 37 6 56.4 0 103.4-40 114.2-93.2l-47-9.6z" fill="#EE4023"></path><path d="m459 295.95c-7.799 7.601-18.299 12.2-29.9 12-8-0.1-15.398-2.5-21.6-6.5l-15.6 24.801c10.699 6.699 23.199 10.699 36.801 10.899 19.699 0.3 37.698-7.5 50.8-20.2l-20.501-21zm-28.199-101.1c-39.201-0.6-71.6 30.8-72.201 70-0.2 14.7 4 28.5 11.5 39.9l128.8-55.101c-7.199-30.899-34.798-54.199-68.098-54.799m-42.701 75.599c-0.2-1.6-0.3-3.3-0.3-5 0.4-23.1 19.401-41.6 42.5-41.2 12.6 0.2 23.799 5.9 31.299 14.9l-73.499 31.3zm151.3-107.6v137.3l23.801 9.9-11.301 27.1-23.6-9.8c-5.299-2.3-8.9-5.8-11.6-9.8-2.6-4-4.6-9.601-4.6-17v-137.7h27.3zm85.901 63.5c4.201-1.4 8.6-2.1 13.301-2.1 20.299 0 37.1 14.4 41 33.5l28.699-5.9c-6.6-32.5-35.299-56.9-69.699-56.9-7.9 0-15.5 1.3-22.5 3.6l9.199 27.8zm-33.901 92.9l19.4-21.9c-8.699-7.7-14.1-18.9-14.1-31.4s5.5-23.7 14.1-31.3l-19.4-21.9c-14.699 13-24 32.1-24 53.3s9.301 40.2 24 53.2zm88.202-44.801c-3.9 19.101-20.801 33.5-41 33.5-4.6 0-9.1-0.8-13.301-2.199l-9.299 27.8c7.1 2.399 14.699 3.7 22.6 3.7 34.4 0 63.1-24.4 69.699-56.9l-28.699-5.901z"></path></g></svg>
`;

function detectCardFlag(n) {
    // Se o número do cartão começa com 4
    if (/^4/.test(n)) {
        // Mostra o logo da Visa no cartão
        prevLogo.innerHTML = logoVisa;
        prevNameCard.textContent = "VISA"
         corCardFrente.style.background = 'linear-gradient(45deg, #b6b5b5ff, #27377eff)';
        corCardTras.style.background = 'linear-gradient(45deg, #b6b5b5ff, #27377eff)';
      
        return; // Sai da função, porque já encontrou a bandeira
    }

    // Se o número do cartão começa com 51, 52, 53, 54 ou 55
    if (/^5[1-5]/.test(n)) {
        // Mostra o logo do Mastercard no cartão
        prevLogo.innerHTML = logoMastercard;
        prevNameCard.textContent = "MASTERCARD"
        corCardFrente.style.background = 'linear-gradient(45deg, #b1b1b1ff, #000000)';
        corCardTras.style.background = 'linear-gradient(45deg, #b1b1b1ff, #000000)';
        return;
    }

    // Se o número do cartão começa com 34 ou 37
    if (/^3[47]/.test(n)) {
        // Mostra o logo do American Express (Amex) no cartão
        prevLogo.innerHTML = logoAmex;
        prevNameCard.textContent = "AMEX"
        corCardFrente.style.background = 'linear-gradient(45deg, #b6b5b5ff, #27377eff)';
        corCardTras.style.background = 'linear-gradient(45deg, #b6b5b5ff, #27377eff)';

        return;
    }

    // Se o número do cartão começa com qualquer um desses prefixos específicos do Elo
    if (/^(4011|4312|4389|4514|4576|5041|5067|509|6277|6362)/.test(n)) {
        // Mostra o logo do Elo no cartão
        prevLogo.innerHTML = logoElo;
        prevNameCard.textContent = "ELO"
        corCardFrente.style.background = 'linear-gradient(45deg, #b30b0bff, #32469cff)';
        corCardTras.style.background = 'linear-gradient(45deg, #b30b0bff, #32469cff)';
        return;
    }

    // Se nenhum dos anteriores bateu, não mostra nenhum logo
    prevLogo.innerHTML = "";

}

// Seletores
const gerarPixBtn = document.querySelector("#form-pix #btn-pix");
const pixArea = document.getElementById("pix-qrcode");
const pixChave = document.getElementById("pix-chave");
const chavePix = "getpet@pix.com"; // substitua pela sua chave PIX real

gerarPixBtn.addEventListener("click", (e) => {
    e.preventDefault(); // evita que o form seja enviado
    // Pega o total do pedido do modal
    const totalModal = document.getElementById("modal-total").textContent;
    const total = parseFloat(totalModal.replace("R$", "").replace(",", "."));
    // Exemplo de QR code PIX simplificado (demonstrativo)
    const textoPix = `00020126360014BR.GOV.BCB.PIX0114${chavePix}520400005303986540${total.toFixed(2)}5802BR5909GetPet 6009Sao Paulo61080540900062070503***6304`;

    // Limpa QR anterior
    pixArea.innerHTML = "";
    pixChave.textContent = `Chave PIX: ${chavePix}`;

    // Gera o QR
    new QRCode(pixArea, {
        text: textoPix,
        width: 180,
        height: 180
    });
});
const btnPagar = document.querySelector("#form-card .btn-pay");
const animCardContainer = document.getElementById("card-success-animation");
const animCardText = document.getElementById("card-success-text")

const lottieCardJSON = {"v":"5.7.12","fr":24,"ip":0,"op":63,"w":520,"h":520,"nm":"Checklist 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Checklist","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[100]},{"t":62,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[259.587,260.119,0],"ix":2,"l":2},"a":{"a":0,"k":[297.587,298.119,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[54.754,-36.121],[-17.487,36.12],[-54.754,-1.147]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":23,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[294.971,298.679],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100]},{"t":36,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":720,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Cricle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":50,"s":[100]},{"t":62,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2,"l":2},"a":{"a":0,"k":[-7.627,-7.691,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":18,"s":[124.222,124.222,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[134.222,134.222,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":22,"s":[114.222,114.222,100]},{"t":24,"s":[124.222,124.222,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[178.46,178.46],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.239],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":24,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.074509803922,0.596078431373,0.349019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.074509803922,0.596078431373,0.349019607843,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":22,"s":[0]},{"t":24,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.627,-7.691],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":720,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":28,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":39,"s":[100]},{"t":50,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2,"l":2},"a":{"a":0,"k":[298,298,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":28,"s":[46,46,100]},{"t":50,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-120.208,0],[0,-120.208],[120.207,0],[0,120.208]],"o":[[120.207,0],[0,120.208],[-120.208,0],[0,-120.208]],"v":[[0,-217.655],[217.655,0],[0,217.655],[-217.655,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.65023354923,0.829386991613,0.709956449621,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[297.587,298.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":28,"op":720,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shadow","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":22,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":33,"s":[100]},{"t":44,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2,"l":2},"a":{"a":0,"k":[298,298,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":22,"s":[60,60,100]},{"t":44,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-94.797,0],[0,-94.797],[94.797,0],[0,94.798]],"o":[[94.797,0],[0,94.798],[-94.797,0],[0,-94.797]],"v":[[0,-171.646],[171.646,0],[0,171.646],[-171.646,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.888151161343,0.944075939702,0.895734480316,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[297.587,298.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":22,"op":720,"st":0,"bm":0}],"markers":[]}

btnPagar.addEventListener("click", (e) => {
    e.preventDefault(); // evita enviar o form

    // Esconde inputs e botão
    btnPagar.style.display = "none";
    card.style.display = "none";
    document.querySelectorAll("#form-card input").forEach(input => input.style.display = "none");

    // Mostra animação
    animCardContainer.style.display = "block";
    animCardText.style.display = "block";

    // Inicializa animação
    lottie.loadAnimation({
        container: animCardContainer,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: lottieCardJSON
    });
    const audioPag = new Audio('./assets/sound_67bf4087253ce.mp3')
    audioPag.play();
});

