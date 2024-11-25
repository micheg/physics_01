import Phaser from "phaser";
import Player from "../prefabs/player.js";
import Star from "../prefabs/star.js";

export default class PlatformerScene extends Phaser.Scene {
  constructor() {
    super("PlatformerScene");
  }

  preload() {
    // Carica le risorse
    this.load.image("ground", "assets/images/platform.png");
    this.load.image("star", "assets/images/star.png");
    this.load.spritesheet("dude", "assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.cameras.main.setBackgroundColor(0x87CEEB);
    // Crea le piattaforme
    const platforms = this.physics.add.staticGroup();
    platforms.create(640, 580, "ground").setScale(4, 1.5).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    // Crea il giocatore utilizzando la classe Player
    this.player = new Player(this, 100, 450, "dude");

    // Collisioni
    this.physics.add.collider(this.player, platforms);

    // Crea le stelle utilizzando la classe Star
    this.stars = this.physics.add.group({
      classType: Star,
      runChildUpdate: true, // Permette l'aggiornamento dei figli se necessario
    });

    // Aggiungi stelle al gruppo
    for (let i = 0; i < 12; i++) {
      const x = 12 + i * 70;
      const y = 0;
      const star = new Star(this, x, y);
      this.stars.add(star);
    }

    // Collisioni con le stelle
    this.physics.add.collider(this.stars, platforms);
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      null,
      this
    );
  }

  update() {
    // Aggiorna il giocatore
    this.player.update();
  }

  collectStar(player, star) {
    // Chiama il metodo collect sulla stella
    star.collect();

    // Aggiorna il punteggio o altra logica di gioco
    // Ad esempio:
    // this.score += 10;
    // this.scoreText.setText('Punteggio: ' + this.score);
  }
}
