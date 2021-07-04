import { Server, Socket } from 'socket.io';

import { log } from '@shared/utils';
import ConnectedUser from './connectedUser';
import WorldManager from './worldManager';

export default class WorldServer {
    io: Server;
    worldManager: WorldManager;

    constructor(io: Server) {
        this.io = io;
        this.worldManager = new WorldManager(this);

        this.setupServer();
    }

    setupServer(): void {
        this.io.on('connection', (socket: Socket) => {
            log(`New connection with ID set to ${socket.id}`);

            // Create a new connected user object and add to the list.
            this.worldManager.add(new ConnectedUser(socket, this.worldManager));
        });
    }
}
