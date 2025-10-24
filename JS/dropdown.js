let caixasTexto = document.querySelector('.open');
const conteudoCaixa = document.querySelector('.open-content');
let botoes = document.querySelectorAll('.btnCaixa');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {

        let estaAtivo = caixasTexto.classList.toggle('active');
        if (botao.textContent === 'Compromisso') {
            conteudoCaixa.textContent = 'Nosso compromisso é garantir o bem-estar e a felicidade do seu pet, oferecendo serviços de alta qualidade e cuidado dedicado.';
        } else if (botao.textContent === 'Empatia') {
            conteudoCaixa.textContent = 'Entendemos as necessidades únicas de cada pet e tratamos todos com amor e respeito, criando um ambiente acolhedor para eles.';
        } else if (botao.textContent === 'Educação') {
            conteudoCaixa.textContent = 'Acreditamos na importância da educação contínua para nossos colaboradores, garantindo que estejam sempre atualizados com as melhores práticas de cuidado animal.';
        } else if (botao.textContent === 'Transparencia') {
            conteudoCaixa.textContent = 'Valorizamos a transparência em todas as nossas interações, mantendo você informado sobre os cuidados e serviços prestados ao seu pet.';
        }

        if (estaAtivo) {
            caixasTexto.style.display = 'block'; // mostrar quando ativo
        } else {
            caixasTexto.style.display = 'none'; // esconder quando inativo
        }
 //Posicionar a caixa de texto abaixo do botão clicado
        const rect = botao.getBoundingClientRect();
        caixasTexto.style.top = `${rect.bottom + 560}px`;
        caixasTexto.style.left = `${rect.left - 50}px`; 

    

    });
});
