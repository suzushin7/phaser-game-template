import Phaser from "phaser";
import { SampleScene } from "./scenes/SampleScene";

let game: Phaser.Game | null = null;

function createGame() {
  if (game) return;

  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "game-container",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
      width: 1280,
      height: 720,
    },
    backgroundColor: "#000000",
    scene: [SampleScene],
  };

  game = new Phaser.Game(config);
}

function checkOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;
  const warning = document.getElementById("rotate-warning");

  if (isLandscape) {
    warning!.style.display = "none";
    if (!game) createGame();
  } else {
    warning!.style.display = "flex";
    if (game) {
      game.destroy(true);
      game = null;
    }
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
