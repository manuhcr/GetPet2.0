window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.BannerSlider');
    const banners = document.querySelectorAll('.BannerConteudo');
    const bannerContainer = document.querySelector('.BannerConteiner');
    let current = 0;

    // Array de cores para cada banner
    const bannerColors = [
        '#F26B5E',  // Banner 1: Cachorro
        '#365914', // Banner 2: Gato
        '#71AB3E'   // Banner 3: Cachorro 2
        
    ];

    function nextBanner() {
        current = (current + 1) % banners.length;
        slider.style.transform = `translateX(-${current * 100}%)`;
        // Aplicar a cor correspondente ao banner atual
        bannerContainer.style.backgroundColor = bannerColors[current];
    }

    // Definir a cor inicial
    bannerContainer.style.backgroundColor = bannerColors[current];

    // Alternar banners a cada 5 segundos
    setInterval(nextBanner, 5000);
});