window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.BannerSlider');
    const banners = document.querySelectorAll('.BannerConteudo');
    let current = 0;

    function nextBanner() {
        current = (current + 1) % banners.length;
        slider.style.transform = `translateX(-${current * 100}%)`;
    }

    setInterval(nextBanner, 5000);
});
