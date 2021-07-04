import '@geckos.io/phaser-on-nodejs';
import 'phaser';

import WorldManager from '../worldManager';
import MainScene from './scenes/mainScene';

const Game = (worldManager: WorldManager): Phaser.Game => {
    const config: Phaser.Types.Core.GameConfig = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audio: false,
        banner: false,
        physics: {
            arcade: {
                gravity: { y: 0 },
            },
        },
        scene: MainScene,
        type: Phaser.HEADLESS,
    };

    config.callbacks = {
        preBoot: () => ({ worldManager }),
    };

    return new Phaser.Game(config);
};

export default Game;
