export default class Player extends Phaser.Physics.Arcade.Sprite {
    id: string;
    removeMe = false;

    constructor(scene: Phaser.Scene, id: string, x: number, y: number) {
        super(scene, x, y, 'player');

        this.id = id;

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}
