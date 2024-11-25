import Phaser from "phaser";

export default class Star extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture = "star") {
    super(scene, x, y, texture);

    // Aggiungi la stella alla scena
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Configura le proprietà fisiche
    this.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    // Riferimento alla scena
    this.scene = scene;

    // Altre inizializzazioni se necessarie
  }

  collect() {
    // Disabilita il corpo fisico della stella ma la mantiene visibile
    this.disableBody(true, false);

    // Crea un tween per animare la stella
    this.scene.tweens.add({
      targets: this,
      scale: { from: 1.5, to: 0.5 }, // Anima la scala
      duration: 500, // Durata totale di 0.5 secondi
      ease: "Power1",
      yoyo: false,
      onComplete: () => {
        this.destroy(); // Distrugge la stella al termine dell'animazione
      },
    });
  }
}
