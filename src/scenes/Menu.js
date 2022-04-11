class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/mixkit-retro-game-notification-212.wav');
      this.load.audio('sfx_explosion', './assets/amogusplosion.wav');
      this.load.audio('sfx_rocket', './assets/mixkit-fast-small-sweep-transition-166.wav');
    } 
    create() {
      this.add.text(20, 20, "Rocket Patrol Menu");
      this.scene.start("playScene");
    }
  }