import Phaser from "phaser";
import GameScene from "./scenes/GameScene.js";
import PlatformerScene from "./scenes/PlatScene.js";

const config = {
  type: Phaser.AUTO,
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
    backgroundColor: 0x87CEEB, // Colore celeste in formato esadecimale
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: true,
    },
  },
  scene: [PlatformerScene],
};

const game = new Phaser.Game(config);
