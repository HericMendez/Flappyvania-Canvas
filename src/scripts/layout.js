// Seleciona o botão de trigger e a sidebar
const sidebarTrigger = document.querySelector("#hamburger-menu");
const sidebar = document.querySelector(".s-sidebar__nav");
//recarrega página index.html ao redimencionar
window.onresize = () => (window.location.href = "index.html");

let width = window.innerWidth;
let height = window.innerHeight;
let baseHeight = 300;

if (window.innerWidth >= 660) {
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
