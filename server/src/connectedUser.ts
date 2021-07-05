import { Socket } from 'socket.io';

import { getRandomInt, log } from '@shared/utils';
import WorldManager from './worldManager';

export default class ConnectedUser {
    position: Phaser.Math.Vector2;
    socket: Socket;
    worldManager: WorldManager;

    constructor(socket: Socket, worldManager: WorldManager) {
        this.position = new Phaser.Math.Vector2(getRandomInt(160), getRandomInt(144));
        this.socket = socket;
        this.worldManager = worldManager;

        this.setupSocket();
    }

    get id(): string {
        return this.socket.id;
    }

    setupSocket(): void {
        this.socket.once('disconnect', () => {
            log(`Client ${this.id} disconnected`);
            this.worldManager.remove(this);
        });
    }

    disconnect(): void {
        this.socket.disconnect();
    }

    send(msg: string, data: any[]): void {
        this.socket.emit(msg, data);
    }
}
