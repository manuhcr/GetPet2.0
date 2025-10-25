window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.BannerSlider');
    const banners = document.querySelectorAll('.BannerConteudo');
    const bannerContainer = document.querySelector('.BannerConteiner');
    let current = 0;

    // Array de cores para cada banner
    const bannerColors = [
        '#3A1F03',  // Banner 1: Cachorro
        '#F5844E', // Banner 2: Gato
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
    banners.forEach((banner, index) => {
        banner.style.borderRadius = '20px'; // Adiciona bordas arredondadas a cada banner
    });

    // Alternar banners a cada 5 segundos
    setInterval(nextBanner, 5000);
});