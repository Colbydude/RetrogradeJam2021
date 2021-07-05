import io from 'socket.io-client';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload(): void {
        this.load.atlas('atlas', 'assets/atlas.png', 'assets/atlas.json');
    }

    create(): void {
        // @TODO Dynamically create animations from the atlas??
        this.anims.create({
            key: 'ElfWalkDown',
            frameRate: 5,
            frames: this.anims.generateFrameNames('atlas', {
                prefix: 'ElfWalkDown',
                start: 0,
                end: 1,
                zeroPad: 0,
            }),
            repeat: -1,
        });

        // Setup the socket.
        const socket = io('ws://localhost:3000', {
            transports: ['websocket'],
        });

        this.scene.start('MainScene', { socket });
    }
}
