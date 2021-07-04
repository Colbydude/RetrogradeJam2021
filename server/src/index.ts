import 'source-map-support';

import { createServer } from 'http';
import { Server } from 'socket.io';

import { log } from '@shared/utils';
import WorldServer from './worldServer';

const port = process.env.PORT || 3000;

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    },
});

httpServer.listen(port, () => {
    log(`listening on *:${port}`);
});

const worldServer = new WorldServer(io);
