import 'phaser';

import { io } from 'socket.io-client';

import { log } from '@shared/utils';

import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';

log('Booting game.');

const SCREEN_WIDTH = 318;
const SCREEN_HEIGHT = 500;

const config: Phaser.Types.Core.GameConfig = {
    audio: { noAudio: true },
    backgroundColor: '#2d1e48',
    banner: false,
    physics: {
        arcade: {
            debug: false,
            gravity: { y: 50 },
        },
        default: 'arcade',
    },
    pixelArt: true,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        height: SCREEN_HEIGHT,
        mode: Phaser.Scale.FIT,
        parent: 'phaser-game',
        width: SCREEN_WIDTH,
    },
    scene: [
        PreloadScene,
        MainScene,
    ],
    type: Phaser.AUTO,
    version: '2.0.0',
};

window.addEventListener('load', () => {
    const socket = io('ws://localhost:3000', {
        transports: ['websocket'],
    });
    new Phaser.Game(config);
});
