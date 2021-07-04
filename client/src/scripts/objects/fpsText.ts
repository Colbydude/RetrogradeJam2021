export default class FpsText extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene) {
        super(scene, 15, 15, '', { color: 'white', fontSize: '24px' });

        scene.add.existing(this);
        this.setOrigin(0);
    }

    update(): void {
        this.setText(`FPS: ${Math.floor(this.scene.game.loop.actualFps)}`);
    }
}
