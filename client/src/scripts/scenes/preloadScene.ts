import io from 'socket.io-client';

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload(): void {
        this.load.image('phaser-logo', 'assets/phaser-logo.png');
    }

    create(): void {
        // Setup the socket.
        const socket = io('ws://localhost:3000', {
            transports: ['websocket'],
        });

        this.scene.start('MainScene', { socket });
    }
}
