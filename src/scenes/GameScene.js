import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    // Carica le risorse
    this.load.image("logo", "assets/images/logo.png");
  }

  create() {
    // Aggiungi un'immagine al centro dello schermo
    this.logo = this.add.image(
      this.scale.width / 2,
      this.scale.height / 2 + 300,
      "logo"
    );
    this.logo.setScale(0.5)
    // Fai muovere l'immagine su e giù
    this.tweens.add({
      targets: this.logo,
      y: this.scale.height / 2 - 300,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }

  update() {
    // Logica di aggiornamento
  }
}
