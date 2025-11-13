// Após o navbar carregar...
fetch("./navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const nav = document.querySelector("nav");
    const isHome = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

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

    // === MENU MOBILE ===
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".mobile-menu");
    const close = document.querySelector(".close-menu");

    toggle.addEventListener("click", () => {
      menu.classList.add("active");
      document.body.style.overflow = "hidden"; // evita scroll do fundo
    });

    close.addEventListener("click", () => {
      menu.classList.remove("active");
      document.body.style.overflow = "";
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll(".mobile-links a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  });
