const setas = document.querySelectorAll('.go-corner');

setas.forEach(seta => {
  seta.addEventListener('click', () => {
    const card = seta.closest('.card');
    const jaAberto = card.classList.contains('show-text');

    // Fecha todos os cards
    document.querySelectorAll('.card').forEach(c => c.classList.remove('show-text'));

    // Abre só o card clicado se não estava aberto
    if (!jaAberto) {
      card.classList.add('show-text');
    }
  });
});
