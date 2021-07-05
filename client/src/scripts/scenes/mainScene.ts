import { Socket } from 'socket.io-client';

import Player from '../objects/player';

export default class MainScene extends Phaser.Scene {
    socket: Socket;
    sync: {
        initialState: boolean;
        objects: any[];
    }

    constructor() {
        super({ key: 'MainScene' });
    }

    init(props: { socket: Socket }): void {
        const { socket } = props;

        this.socket = socket;
        this.sync = { initialState: true, objects: [] };
        this.listen();
    }

    listen(): void {
        this.socket.on('pos', (msg: {id: string, x: number, y: number}) => {
            console.log(`New Player: ${msg.id}`);

            this.sync.objects.push(new Player(this, msg.id, msg.x, msg.y));
        });

        this.socket.on('player-disconnect', (id: string) => {
            console.log(`Player Disconnected: ${id}`);
            const player: Player = this.sync.objects.find((entity: {id: string}) => entity.id === id);

            if (player) {
                player.removeMe = true;
            }
        });
    }

    update(): void {
        if (this.sync.objects.length > 0) {
            this.sync.objects.forEach((entity: Player) => {
                if (entity.removeMe) {
                    entity.destroy();
                }
            });
        }
    }
}
