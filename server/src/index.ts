import 'source-map-support';
import '@geckos.io/phaser-on-nodejs';
import 'phaser';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import { log } from '@shared/utils';
import ConnectedUser from './connectedUser';

const port = process.env.PORT || 3000;

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

// List of all connected users.
const users: ConnectedUser[] = [];

io.on('connection', (socket: Socket) => {
    log('New connection.');

    // Create a new connected user object and add to the list.
    const newUser = new ConnectedUser(socket);
    users.push(newUser);

    // Let all the other users know where the new user is.
    users.forEach((user) => {
        user.socket.emit('pos', newUser.position);
        newUser.socket.emit('pos', user.position);
    });
});

httpServer.listen(port, () => {
    log(`listening on *:${port}`);
});
