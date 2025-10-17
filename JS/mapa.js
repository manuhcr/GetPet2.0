const filiais = {
  Rio_Grande_do_Sul_BR: "Rua das Flores, 123, Porto Alegre",
  São_Paulo_BR: "Av. Paulista, 1000, São Paulo"
  // outros estados...
};

const infoBox = document.getElementById('info-box');
const estadoNome = document.getElementById('estado-nome');
const endereco = document.getElementById('endereco');

document.querySelectorAll('svg path').forEach(path => {
  path.addEventListener('click', (e) => {
    const id = e.target.id; // é o ID do estado clicado, ex: "Rio_Grande_do_Sul_BR"
    
    // atualiza o conteúdo da caixa de informação                       
    estadoNome.textContent = id;
    endereco.textContent = filiais[id] || "Não temos filial neste estado.";
    
    // posiciona a caixa perto do clique
    infoBox.style.left = e.pageX + 10 + 'px';
    infoBox.style.top = e.pageY + 10 + 'px';
    infoBox.style.display = 'block';
  });
});