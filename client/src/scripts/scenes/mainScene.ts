import { Socket } from 'socket.io-client';

import Player from '../objects/player';

export default class MainScene extends Phaser.Scene {
    socket: Socket;

    constructor() {
        super({ key: 'MainScene' });
    }

    init(props: { socket: Socket }): void {
        const { socket } = props;

        this.socket = socket;
        this.listen();
    }

    listen(): void {
        this.socket.on('pos', (msg: {x: number, y: number}) => {
            new Player(this, msg.x, msg.y);
        });
    }
}
