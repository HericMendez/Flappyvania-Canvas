function Pilares() {
  const pilares = {
    largura: 80,
    altura: 400,
    low: {
      spriteX: 100,
      spriteY: 0,
    },

    high: {
      spriteX: 0,
      spriteY: 0,
    },

    pares: [],

    update() {
      if (frames % 100 === 0) {
        pilares.pares.push({ x: canvas.width, y: -180 * (Math.random() + 1) });
      }

      this.pares.forEach((par) => {
        par.x = par.x - 2;
        if (par.x < -60) pilares.pares.shift();
        if (colideComPilares(par)) {
          deathSound.play();
          highscore.tries++;
          highscore.last = score.pontos;

          trocaTela(Telas.fim);

          console.log("Game Over!");
          return;
        }
      });
    },

    desenha() {
      pilares.pares.forEach((par) => {
        const randomY = par.y;
        const pilarGap = 150;

        const pilarHighX = par.x;
        const pilarHighY = randomY;

        const pilarLowX = par.x;
        const pilarLowY = pilares.altura + pilarGap + randomY;

        context.drawImage(
          pilaresImg,
          pilares.high.spriteX,
          pilares.high.spriteY,
          pilares.largura,
          pilares.altura,
          pilarHighX,
          pilarHighY,
          pilares.largura,
          pilares.altura
        );

        context.drawImage(
          pilaresImg,
          pilares.low.spriteX,
          pilares.low.spriteY,
          pilares.largura,
          pilares.altura,
          pilarLowX,
          pilarLowY,
          pilares.largura,
          pilares.altura
        );

        par.pilarHigh = {
          x: pilarHighX,
          y: pilares.altura + pilarHighY,
        };
        par.pilarLow = {
          x: pilarLowX,
          y: pilarLowY,
        };
      });
    },
  };
  return pilares;
}

const colideComPilares = (pilar) => {
  const batTop = bat.y + 43;
  const batBottom = bat.y + bat.altura - 30;

  if (bat.x + bat.largura >= pilar.x) {
    // if(navinhaTop<=pilar.pilarHigh.y || navinhaBottom >=pilar.pilarLow.y) return true;
    if (batTop <= pilar.pilarHigh.y) {
      console.log(batBottom, batTop);
      return true;
    }
    if (batBottom >= pilar.pilarLow.y) {
      console.log(batBottom, batTop);
      return true;
    }
  }
  return false;
};

const colideComCenario = (objetoPlayer, objetoCenario) => {
  const batY = objetoPlayer.y + objetoPlayer.altura - 30;
  const cenarioY = objetoCenario.y;

  if (batY >= cenarioY) {
    return true;
  }

  return false;
};
