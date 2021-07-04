export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload(): void {
        this.load.image('phaser-logo', 'assets/phaser-logo.png');
    }

    create(): void {
        this.scene.start('MainScene');
    }
}
