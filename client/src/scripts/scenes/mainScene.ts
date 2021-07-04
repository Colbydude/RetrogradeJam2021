import FpsText from '../objects/fpsText';
import PhaserLogo from '../objects/phaserLogo';

export default class MainScene extends Phaser.Scene {
    private fpsText: FpsText;

    constructor() {
        super({ key: 'MainScene' });
    }

    create(): void {
        new PhaserLogo(this, this.cameras.main.width / 2, 0);
        this.fpsText = new FpsText(this);

        // Display the Phaser.VERSION.
        this.add
            .text(15, this.cameras.main.height - 15, `Phaser v${Phaser.VERSION}`, {
                color: 'white',
                fontSize: '24px',
            })
            .setOrigin(0, 1);
    }

    update(): void {
        this.fpsText.update();
    }
}
