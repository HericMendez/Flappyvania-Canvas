const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_score")) ?? {
    last: 0,
    best: 0,
    tries: 0,
  };

const setLocalStorage = (item) =>
  localStorage.setItem("db_score", JSON.stringify(item));

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const clockTower = new Image();
clockTower.src = "./src/images/clock_tower.png";

const telas = new Image();
telas.src = "./src/images/telas_2.png";

const alucardBat = new Image();
alucardBat.src = "./src/images/alucard.png";

const pilaresImg = new Image();
pilaresImg.src = "./src/images/pilares.png";

var background = new Image();
background.src = "./src/images/background_original.png";

const deathSound = new Audio();
deathSound.src = "./src/sounds/snd_bat_dies.wav";

const bgMusic = new Audio();
bgMusic.src = "./src/sounds/nes_music.mp3";
