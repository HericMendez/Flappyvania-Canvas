// Seleciona o botão de trigger e a sidebar
const sidebarTrigger = document.querySelector(".s-sidebar__trigger");
const sidebar = document.querySelector(".s-sidebar__nav");
//recarrega página index.html ao redimencionar
window.onresize = () => (window.location.href = "index.html");

let width = window.innerWidth;
let height = window.innerHeight;

let baseHeight = 300;

if (window.innerWidth >= 840) {
  width = 800;
  height = 600;
  baseHeight = 416;
} else if (window.innerWidth >= 660) {
  width = 640;
  height = 480;
  baseHeight = 295;
} else {
  width = 320;
  height = 480;
  baseHeight = 300;
}

canvas.width = width;
canvas.height = height;

// Função para verificar o estado da sidebar
function checkSidebarState() {
  if (sidebar.classList.contains("is-open")) {
    pausado = true;

    console.log("Navbar está aberta");
  } else {
    console.log("Navbar está fechada");
    pausado = false;
  }
}

// Adiciona um event listener para alternar a classe 'is-open'
sidebarTrigger.addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
  checkSidebarState();
});

document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", function (event) {
    event.preventDefault();

    // Fecha todos os submenus antes de abrir o clicado
    document.querySelectorAll(".submenu").forEach((sub) => {
      if (sub !== this.nextElementSibling) {
        sub.classList.remove("open");
      }
    });

    // Alterna o submenu clicado
    const submenu = this.nextElementSibling;
    submenu.classList.toggle("open");

    // Rotação do ícone de seta
    document.querySelectorAll(".submenu-icon").forEach((icon) => {
      if (icon !== this.querySelector(".submenu-icon")) {
        icon.classList.remove("rotated");
      }
    });

    const icon = this.querySelector(".submenu-icon");
    icon.classList.toggle("rotated");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backToGameBtn = document.querySelector(".back-to-game");
  const sidebar = document.querySelector(".s-sidebar__nav");

  if (backToGameBtn && sidebar) {
    backToGameBtn.addEventListener("click", function (event) {
      event.preventDefault();
      sidebar.classList.remove("is-open"); // Fecha o menu
    });
  }
});
