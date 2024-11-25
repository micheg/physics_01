import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    // Aggiungi il giocatore alla scena
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Configura le proprietà fisiche
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);

    // Riferimento alla scena
    this.scene = scene;

    // Configura le animazioni (assicurati che vengano create una sola volta)
    if (!this.scene.anims.exists("left")) {
      this.createAnimations();
    }

    // Configura l'input
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  createAnimations() {
    // Animazione "left"
    this.scene.anims.create({
      key: "left",
      frames: this.scene.anims.generateFrameNumbers("dude", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Animazione "turn"
    this.scene.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    // Animazione "right"
    this.scene.anims.create({
      key: "right",
      frames: this.scene.anims.generateFrameNumbers("dude", {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    // Movimento del giocatore
    if (this.cursors.left.isDown) {
      this.setVelocityX(-160);
      this.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(160);
      this.anims.play("right", true);
    } else {
      this.setVelocityX(0);
      this.anims.play("turn");
    }

    // Salto
    if (this.cursors.up.isDown && this.body.blocked.down) {
      this.setVelocityY(-360);
    }
  }
}
