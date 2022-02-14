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
clockTower.src = "./assets/sprites/clock_tower.png";

const telas = new Image();
telas.src = "./assets/sprites/telas_2.png";

const alucardBat = new Image();
alucardBat.src = "./assets/sprites/alucard.png";

const pilares = new Image();
pilares.src = "./assets/sprites/pilares.png";

var background = new Image();
background.src = "./assets/sprites/background_original.png";

const deathSound = new Audio();
deathSound.src = "./assets/sounds/snd_bat_dies.wav";

const bgMusic = new Audio();
bgMusic.src = "./assets/sounds/nes_music.mp3";


