import 'phaser';

import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

const config: Phaser.Types.Core.GameConfig = {
    audio: { noAudio: true },
    backgroundColor: '#2d1e48',
    banner: false,
    physics: {
        arcade: {
            debug: false,
            gravity: { y: 0 },
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
    version: '0.0.1',
};

window.addEventListener('load', () => {
    new Phaser.Game(config);
});
