import { Socket } from 'socket.io';

import { getRandomInt } from '@shared/utils';

export default class ConnectedUser {
    position: Phaser.Math.Vector2;
    socket: Socket;

    constructor(socket: Socket) {
        this.position = new Phaser.Math.Vector2(getRandomInt(160), getRandomInt(144));
        this.socket = socket;

        this.socket.emit('pos', this.position);
    }
}
