import Phaser from "phaser";

export class SampleScene extends Phaser.Scene {
  constructor() {
    super({ key: "SampleScene" });
  }

  preload() {
    this.load.image("logo", "icon-192.png");
  }

  create() {
    this.add.image(640, 180, "logo").setOrigin(0.5, 0.5);
    this.add
      .text(640, 360, "Hello, Phaser!", {
        fontSize: "64px",
        color: "#fff",
      })
      .setOrigin(0.5, 0.5);
  }

  update() {}
}
