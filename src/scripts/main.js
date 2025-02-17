let frames = 0;
let animFrame = null;
let pausado = false;

const Telas = {
  inicio: {
    inicializa() {
      bat = new Bat();
      cenario = new Cenario();
      pilares = new Pilares();
      telaStart = newTelaGetReady();
      score = Score();
    },

    desenha() {
      cenario.paisagem.desenha();
      pilares.desenha();
      cenario.torres.desenha();
      cenario.chao.desenha();
      bat.desenha();

      telaStart.desenha();
      score.desenhaTopScore();
    },

    click() {
      trocaTela(Telas.jogo);
      bgMusic.play();
    },

    update() {
      cenario.torres.update();
      cenario.chao.update();
      cenario.paisagem.update();
      score.update();
    },
  },

  jogo: {
    inicializa() {
      score = Score();
    },

    update() {
      if (pausado) return;

      bat.update();
      cenario.chao.update();
      cenario.paisagem.update();
      cenario.torres.update();
      score.update();
      pilares.update();
    },

    click() {
      if (!pausado) {
        bat.jump();
      }
    },

    desenha() {
      cenario.paisagem.desenha();
      cenario.torres.desenha();
      pilares.desenha();
      cenario.chao.desenha();
      bat.desenha();
      score.desenhaAtual();
    },
  },

  fim: {
    desenha() {
      setLocalStorage(highscore);
      newTelaGameOver().desenha();
    },
    update() {},
    click() {
      trocaTela(Telas.inicio);
    },
  },
};

let telaAtiva = {};
const trocaTela = (novaTela) => {
  telaAtiva = novaTela;

  if (telaAtiva.inicializa) {
    telaAtiva.inicializa();
  }
};

const loop = () => {
  if (!pausado) {
    frames += 1;
    telaAtiva.update();
    telaAtiva.desenha();
  }
  animFrame = requestAnimationFrame(loop);
};

document.addEventListener("click", (event) => {
  const canvas = document.getElementById("game-canvas");

  const rect = canvas.getBoundingClientRect();

  const dentroDoCanvas =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (dentroDoCanvas) {
    telaAtiva.click();
    pausado = false;
    bgMusic.play();
  } else {
    pausado = true;
    bgMusic.pause();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.code === "KeyW") {
    telaAtiva.click();
  }

  if (event.code === "KeyM") {
    if (bgMusic.paused) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  }

  if (event.code === "KeyP") {
    pausado = !pausado;

    if (pausado) {
      cancelAnimationFrame(animFrame); // Para o loop
      bgMusic.play();
    } else {
      loop(); // Continua o loop sem criar instâncias duplicadas
      bgMusic.pause();
    }
  }
});

trocaTela(Telas.inicio);
loop();
