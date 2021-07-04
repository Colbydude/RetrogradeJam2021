import { log } from '@shared/utils';
import Game from './game/game';
import ConnectedUser from './connectedUser';
import WorldServer from './worldServer';

export default class WorldManager {
    game: Phaser.Game;
    server: WorldServer;
    users: ConnectedUser[];

    constructor(server: WorldServer) {
        this.server = server;
        this.users = [];

        this.bootGame();
    }

    add(client: ConnectedUser): void {
        this.users.push(client);
        log(`Connected users: ${this.users.length}`);

        // Let all the other users know where the new user is.
        this.users.forEach((user) => {
            user.socket.emit('pos', { id: client.id, ...client.position });
            client.socket.emit('pos', { id: user.id, ...user.position });
        });
    }

    async bootGame(): Promise<void> {
        this.game = await Game(this);

        log('Game booted.');
    }

    remove(client: ConnectedUser): void {
        this.users = this.users.filter((user: ConnectedUser) => user.id !== client.id);

        this.users.forEach((user) => {
            user.socket.emit('player-disconnect', client.id);
        });
    }
}
