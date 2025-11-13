fetch('./navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  if (!nav) return; // 🚨 Sai do código se não existir <nav>

  const isHome = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

  if (isHome) {
    nav.classList.add("transparente");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.remove("transparente");
        nav.classList.add("marrom");
      } else {
        nav.classList.remove("marrom");
        nav.classList.add("transparente");
      }
    });
  } else {
    nav.classList.add("marrom");
  }
});
