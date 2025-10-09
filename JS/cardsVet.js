function filtrarVets() {
    const nomeFiltro = document.getElementById('filtro-nome').value.toLowerCase();
    const especialidadeFiltro = document.getElementById('filtro-especialidade').value.toLowerCase();

    const cards = document.querySelectorAll('.card-vet');

    cards.forEach(card => {
    const nome = card.querySelector('.nome-vet').textContent.toLowerCase();

    const especialidadeImgs = card.querySelectorAll('.vet-especialidade img');
    const especialidades = Array.from(especialidadeImgs).map(img => {
        const src = img.getAttribute('src').toLowerCase();
        if (src.includes('clinico')) return 'clinico';
        if (src.includes('silvestre')) return 'silvestre';
        if (src.includes('reptil')) return 'reptil';
        return '';
    });

    const nomeCombina = nome.includes(nomeFiltro);
    const especialidadeCombina = !especialidadeFiltro || especialidades.includes(especialidadeFiltro);

    card.style.display = (nomeCombina && especialidadeCombina) ? 'block' : 'none';
    });
}