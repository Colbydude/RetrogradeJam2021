import 'module-alias/register';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import { log } from '@shared/utils';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket) => {
    log('New connection.');
});

httpServer.listen(3000, () => {
    log('listening on *:3000');
});
